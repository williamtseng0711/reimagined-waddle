let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "pie";
trace1.title = "機器學習概論";
trace1.labels = [];
trace1.values = [];
trace1.domain = {
    row:0,
    column:0
};
trace1.hole=0.5;

for(let x=0; x<evaluation_ratio_1.length;x++){
    trace1.labels[x] = evaluation_ratio_1[x]['name'];
    trace1.values[x] = evaluation_ratio_1[x]['count'];
}

let trace2 = {};
trace2.type = "pie";
trace2.title = "資料視覺化";
trace2.labels = [];
trace2.values = [];
trace2.domain = {
    row: 0,
    column: 1
};

for (let x = 0; x < evaluation_ratio_2.length; x++) {
    trace2.labels[x] = evaluation_ratio_2[x]['name'];
    trace2.values[x] = evaluation_ratio_2[x]['count'];
}
trace2.hole=0.5;

let trace3 = {};
trace3.type = "pie";
trace3.title = "人工智慧與永續發展";
trace3.labels = [];
trace3.values = [];
trace3.domain = {
    row: 1,
    column: 0
};

for (let x = 0; x < evaluation_ratio_3.length; x++) {
    trace3.labels[x] = evaluation_ratio_3[x]['name'];
    trace3.values[x] = evaluation_ratio_3[x]['count'];
}
trace3.hole=0.5;

let trace4 = {};
trace4.type = "pie";
trace4.title = "Python";
trace4.labels = [];
trace4.values = [];
trace4.domain = {
    row: 1,
    column: 1
};

for (let x = 0; x < evaluation_ratio_4.length; x++) {
    trace4.labels[x] = evaluation_ratio_4[x]['name'];
    trace4.values[x] = evaluation_ratio_4[x]['count'];
}
trace4.hole=0.5;

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);
data.push(trace4);

let layout = {
    margin:{
        t:10,
        l:0
    },
    grid:{
        rows:2,
        columns:2
    }
};

Plotly.newPlot(myGraph, data, layout);