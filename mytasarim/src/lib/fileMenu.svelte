<script>
    import {jsPDF} from 'jspdf'
    import { bebas } from './fonts64s';

    export let canvasDiv;
    export let canvasOptions;

    function saveFunction(){
        console.log("saving:\n",canvasDiv);

        let pdfWidth = canvasOptions.width;
        let pdfHeight = canvasOptions.height;
        
        let doc = new jsPDF({
            unit:"pt",
            precision:100,
            format:[pdfWidth, pdfHeight]
        });

        
        doc.addFileToVFS('BebasNeue-Regular.ttf', bebas);
        doc.addFont('BebasNeue-Regular.ttf', 'bebas', 'normal');

        doc.html(canvasDiv.firstChild, {
            callback: function (doc) {
                doc.save();
            },
            autoPaging:false,
            margin: 0,
            x: 0,
            y: 0,
            html2canvas: {},
        });
    };
</script>

<div>
    <button class="button" on:click={saveFunction}>Save as PDF</button>
</div>