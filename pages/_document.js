import Document, { Head, Main, NextScript } from "next/document";
import Link from 'next/link';

export default class MyDocument extends Document{
    render(){
        return(
            <html>
                <Head>
                <div>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>AdminLTE 3 | Dashboard 3</title>
  {/* Google Font: Source Sans Pro */}
  <link href="https://fonts.googleapis.com/css2?family=Prompt:ital,wght@0,300;0,400;0,700;1,400&display=swap" rel="stylesheet" />
  {/* Font Awesome Icons */}
  <link rel="stylesheet" href="plugins/fontawesome-free/css/all.min.css" />
  {/* IonIcons */}
  <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css" />
  {/* Theme style */}
  <link rel="stylesheet" href="dist/css/adminlte.min.css" />

</div>

{/* jQuery */}
<script src="plugins/jquery/jquery.min.js"></script>

{/* jQuery UI 1.11.4 */}
<script src="plugins/jquery-ui/jquery-ui.min.js"></script>

{/* Resolve conflict in jQuery UI tooltip with Bootstrap tooltip */}
<script>
  $.widget.bridge('uibutton', $.ui.button)
</script>

{/* Bootstrap 4 */}
<script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>

{/* ChartJS */}
<script src="plugins/chart.js/Chart.min.js"></script>

{/* Sparkline */}
{/* <script src="plugins/sparklines/sparkline.js"></script> */}

{/* JQVMap */}
<script src="plugins/jqvmap/jquery.vmap.min.js"></script>
<script src="plugins/jqvmap/maps/jquery.vmap.usa.js"></script>

{/* jQuery Knob Chart */}
<script src="plugins/jquery-knob/jquery.knob.min.js"></script>
{/* daterangepicker */}

<script src="plugins/moment/moment.min.js"></script>
<script src="plugins/daterangepicker/daterangepicker.js"></script>

{/* Tempusdominus Bootstrap 4 */}
<script src="plugins/tempusdominus-bootstrap-4/js/tempusdominus-bootstrap-4.min.js"></script>

{/* Summernote */}
<script src="plugins/summernote/summernote-bs4.min.js"></script>

{/* overlayScrollbars */}
<script src="plugins/overlayScrollbars/js/jquery.overlayScrollbars.min.js"></script>

{/* AdminLTE App */}
<script src="dist/js/adminlte.js"></script>

{/* AdminLTE for demo purposes */}
<script src="dist/js/demo.js"></script>

<script src="plugins/datatables/jquery.dataTables.min.js"></script>
<script src="plugins/datatables-bs4/js/dataTables.bootstrap4.min.js"></script>
<script src="plugins/datatables-responsive/js/dataTables.responsive.min.js"></script>
<script src="plugins/datatables-responsive/js/responsive.bootstrap4.min.js"></script>
<script src="plugins/datatables-buttons/js/dataTables.buttons.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.bootstrap4.min.js"></script>
<script src="plugins/jszip/jszip.min.js"></script>
<script src="plugins/pdfmake/pdfmake.min.js"></script>
<script src="plugins/pdfmake/vfs_fonts.js"></script>
<script src="plugins/datatables-buttons/js/buttons.html5.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.print.min.js"></script>
<script src="plugins/datatables-buttons/js/buttons.colVis.min.js"></script>
<script src="js/DataTable.js"></script>


{/* AdminLTE dashboard demo (This is only for demo purposes) */}
{/* <script src="dist/js/pages/dashboard.js"></script> */}

                </Head>
                <body className="hold-transition sidebar-mini">
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}