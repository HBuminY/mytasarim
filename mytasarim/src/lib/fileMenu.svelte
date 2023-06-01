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
    <p class="text-red-700">This version of MyTasarim has a bug that might cause exports to end up with an extra blank page. You can delete that unintended page using online tools or adobe acrobat. Good day!</p>
    <button class="button" on:click={saveFunction}>Save as PDF</button>
</div>