<script>
    import { conDivStruct, fixDivSizes } from "./stores";

    import {jsPDF} from 'jspdf'
    import { bebas } from './fonts64s';

    export let canvasDiv;
    export let canvasOptions;

    function savePDF(){
        alert("saving PDF!")
        return;
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

    $:{
        let vals = Object.values($conDivStruct.divlist);
        if(vals.length!=0&&vals.every((n)=>n.isfixed)){
            savePDF();
        };
    };

</script>

<div>
    <p class="text-red-700">Exports may result with an extra blank page.</p>
    <button class="button" on:click={()=>{$fixDivSizes=true;}}>Save as PDF</button>
    {JSON.stringify($conDivStruct)}
</div>