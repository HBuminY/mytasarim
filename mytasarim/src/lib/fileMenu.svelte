<script>
    import {jsPDF} from 'jspdf'

    export let canvasDiv;
    export let canvasOptions;

    var doc = new jsPDF({
        unit:"pt",
        precision:100,
    });

    function saveFunction(){
        console.log("saving:\n",canvasDiv);

        doc.html(canvasDiv, {
            callback: function (doc) {
                doc.save();
            },
            margin: [0, 0, 0, 0],
            width:595,
            x: 0,
            y: 0,
            html2canvas: {},
        });
    };
</script>

<div>
    <button class="button" on:click={saveFunction}>Save as PDF</button>
</div>