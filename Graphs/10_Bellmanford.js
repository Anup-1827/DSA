// Bellmanford Algorithm is used for the all the weights (Positive/ Negative)
// Time complexity of Bellmanford is more than Dijkstra's Algorithm


//Step 1:-- Perfom operation V-1 times
// V-1 times is just because the case may be the shortest distane from one node to another may pass from all the node where the node covered to reach the last node is V-1


//Bellmanford does not work for the negative weight cycle
// To check for negative weight cycle 
// Bellmanford Algorithm is used again 

class Vertex{
    constructor(src, dest, wegt){
        this.source = src;
        this.destination = dest;
        this.weight = wegt;
    }
}

class Bellmanford{
    constructor(totalVertices){
        this.graph = new Array(totalVertices).fill().map(item=> new Array());
    }

    createGraph(index, node){
        this.graph[index].push(node)
    }

    bellmanford(source){
        const totalVertices = this.graph.length 
        const distanceArrray = new Array(totalVertices).fill(Number.POSITIVE_INFINITY)
        distanceArrray[source] = 0;

        for(let i=0; i< totalVertices - 1; i++){

            for(let j = 0; j< totalVertices; j++){

                const edges = this.graph[j]
                for(let k=0; k< edges.length; k++){

                    const src = edges[k].source;
                    const desti = edges[k].destination;
                    const weit = edges[k].weight;


                    if(distanceArrray[src] + weit < distanceArrray[desti] && distanceArrray[src] !== Number.POSITIVE_INFINITY){
                        distanceArrray[desti] = distanceArrray[src] + weit
                    }

                }
            }
        }


        //To check negative cycle
        for(let i=0; i< totalVertices - 1; i++){

            for(let j = 0; j< totalVertices; j++){

                const edges = this.graph[j]
                for(let k=0; k< edges.length; k++){

                    const src = edges[k].source;
                    const desti = edges[k].destination;
                    const weit = edges[k].weight;


                    if(distanceArrray[src] + weit < distanceArrray[desti] && distanceArrray[src] !== Number.POSITIVE_INFINITY){
                        console.log("Negative Weight Cycle exist");
                        return;
                    }

                }
            }
        }

        console.log(distanceArrray);
    }
}


const bellmanfordGraph = new Bellmanford(5);

bellmanfordGraph.createGraph(0, new Vertex(0, 1, 2))
bellmanfordGraph.createGraph(0, new Vertex(0, 2, 4))

bellmanfordGraph.createGraph(1, new Vertex(1, 2, -4))

bellmanfordGraph.createGraph(2, new Vertex(2, 3, 2))

bellmanfordGraph.createGraph(3, new Vertex(3, 4, 4))

bellmanfordGraph.createGraph(4, new Vertex(4, 1, -1))
// bellmanfordGraph.createGraph(4, new Vertex(4, 1, -10)) //Negative Weight Cycle Exist

bellmanfordGraph.bellmanford(0)

