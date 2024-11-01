const roads = [
    "Дом Алисы-Дом Боба", "Дом Алисы-Склад", "Дом Алисы-Почта", "Дом Боба-Ратуша", "Дом Дарии-Дом Эрни",
    "Дом Дарии-Ратуша", "Дом Эрни-Дом Греты", "Дом Греты-Ферма", "Дом Греты-Магазин", "Рынок-Ферма",
    "Рынок-Почта", "Рынок-Магазин", "Рынок-Ратуша", "Магазин-Ратуша"
];

function buildGraph(edges) {

    let graph = Object.create(null)
    function addEdge(from, to) {
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;

}

const roadGraph = buildGraph(roads)

console.log(roadGraph)

class VillageState {

    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }

    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return { place: destination, addres: p.address };
            }).filter(p => p.place != p.addres);
            return new VillageState(destination, parcels);
        }
    }

}

let first = new VillageState(
    "Почта",
    [{place: "Почта", address: "Дом Алисы"}]
);

let next = first.move("Дом Алисы");
console.log(next.place);
console.log(next.parcels);
console.log(first.place);
console.log(first.parcels);

function runRobot(state, robot, memory) {
    for (let turn = 0;; turn++) {
        console.log(`Выполненно за ${turn} ходов`)
        break;
    }
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
    console.log(`Переход в направлении ${action.direction}`);
}