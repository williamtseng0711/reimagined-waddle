let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "histogram";
trace1.x = set1;
trace1.opacity=0.5;
trace1.marker={
    color:'green'
}

let trace2 = {};
trace2.type = "histogram";
trace2.x = set2;
trace2.opacity=0.5;
trace2.marker={
    color:'red'
}

let data = [];
data.push(trace1);
data.push(trace2);


let layout = {
    margin: {
        t: 0

    },
    title:'',
    barmode:'trick'

};

Plotly.newPlot(myGraph, data, layout);