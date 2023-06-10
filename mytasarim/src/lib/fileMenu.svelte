<script>
    import { conDivStruct, panzoomInstance } from "./stores";
    import {jsPDF} from 'jspdf'
    import { bebas } from './fonts64s';

    export let canvasDiv;
    export let canvasOptions;

    function savePDF(){
        let pdfWidth = canvasOptions.width;
        let pdfHeight = canvasOptions.height;
        
        let doc = new jsPDF({
            unit:"pt",
            precision:100,
            format:[pdfWidth, pdfHeight]
        });

        //example font adding
        doc.addFileToVFS('BebasNeue-Regular.ttf', bebas);
        doc.addFont('BebasNeue-Regular.ttf', 'bebas', 'normal');

        $panzoomInstance.moveTo(0, 0);
        $panzoomInstance.zoomAbs(0, 0, 1);
        setTimeout(() => {
            doc.html(canvasDiv, {
                callback: (doc)=>{doc.save();},
                autoPaging:"slice",
                margin: 0,
                x: 0,
                y: 0
            });
        }, 100);
    };
</script>

<div>
    <p class="text-red-700">Exports may result with an extra blank page.</p>

    <button class="button bg-green-300" on:click={()=>{savePDF();}}>Render PDF</button>
</div>