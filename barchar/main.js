let myGraph = document.getElementById('myGraph');

let trace1 = {};
trace1.type = "bar";
trace1.name = "7/29"
trace1.x = [];
trace1.y = [];
trace1.x[0]="七張站";
trace1.x[1]="大坪林站";
trace1.y[0]=七張站[0]["count"];
trace1.y[1]=大坪林站[0]["count"];
trace1.text= trace1.y;
trace1.textfont={
    color:'yellow',
    size:20
};
trace1.marker={
    color:'blue'
}

let trace2 = {};
trace2.type = "bar";
trace2.name = "7/30"
trace2.x = [];
trace2.y = [];
trace2.x[0]="七張站";
trace2.x[1]="大坪林站";
trace2.y[0]=七張站[1]["count"];
trace2.y[1]=大坪林站[1]["count"];
trace2.text= trace2.y;
trace2.textfont={
    color:'yellow',
    size:20
};
trace2.marker={
    color:'purple'
}

let trace3 = {};
trace3.type = "bar";
trace3.name = "7/31"
trace3.x = [];
trace3.y = [];
trace3.x[0]="七張站";
trace3.x[1]="大坪林站";
trace3.y[0]=七張站[2]["count"];
trace3.y[1]=大坪林站[2]["count"];
trace3.text= trace3.y;
trace3.textfont={
    color:'yellow',
    size:20
};
trace3.marker={
    color:'green'
}

let data = [];
data.push(trace1);
data.push(trace2);
data.push(trace3);

let layout = {
    margin: {
        t: 50

    },
    barmode: "stack",
    title:'七張站與大坪林站進出人口比較圖'
};

Plotly.newPlot(myGraph, data, layout);