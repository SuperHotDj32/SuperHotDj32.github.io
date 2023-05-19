
    var map;

    require([
      "esri/map",
      "esri/dijit/LocateButton",
      "dojo/domReady!"
    ], function(
      Map, LocateButton
    )  {

      map = new Map("map", {
        center: [-56.049, 38.485],
        zoom: 3,
        basemap: "streets-vector"
      });

      geoLocate = new LocateButton({
        map: map
      }, "LocateButton");
      geoLocate.startup();

    });

  //MAPP
var map;
    require([
      "esri/map",
      "esri/dijit/BasemapToggle",
      "dojo/domReady!"
    ], function(
      Map, BasemapToggle
    )  {
        //configure map animation to be faster
        esriConfig.defaults.map.panDuration = 1; // time in milliseconds, default panDuration: 350
        esriConfig.defaults.map.panRate = 1; // default panRate: 25
        esriConfig.defaults.map.zoomDuration = 100; // default zoomDuration: 500
        esriConfig.defaults.map.zoomRate = 1; // default zoomRate: 25

      map = new Map("map", {
        center: [23.646471678670267, 37.93890546721702],
        zoom: 13,
        basemap: "topo-vector"
      });

      var toggle = new BasemapToggle({
        map: map,
        basemap: "satellite"
      }, "BasemapToggle");
      toggle.startup();

    });
     //PIN
      require([
        "esri/Map",
        "esri/views/MapView",
        "esri/Graphic",
        "esri/geometry/Point",
        "esri/PopupTemplate",
      ], function (Map, MapView, Graphic, Point, PopupTemplate) {
        var map = new Map({
          basemap: "topo-vector",
        });

        var view = new MapView({
          container: "viewDiv",
          map: map,
          center: [23.6665, 37.9335], // Longitude, latitude
          zoom: 13,
        });

        //Μικρολιμανο
        view.when(function () {
          var pinPoint = new Point({
            longitude: 23.66653162398405,
            latitude:  37.93357424624533,
          });

          var pinSymbol = {
            type: "simple-marker",
            color: "blue",
            size: "20px",
            outline: {
              color: [255, 255, 255],
              width: 3,
            },
          };

          view.graphics.add(pinGraphic2);
          var popupTemplate = new PopupTemplate({
            title: "Μικρολίμανο",
            content: "Το Μικρολίμανο ή Φανάρι ή λιμένας Κουμουνδούρου, πρώην Τουρκολίμανο και στην αρχαιότητα Λιμένας Μουνιχίας, αποτελεί σήμερα τουριστική τοποθεσία και περιλαμβάνεται στην ευρύτερη συνοικία της Καστέλλας. Βρίσκεται στα βορειοανατολικά της Πειραϊκής χερσονήσου συνορεύοντας με την συνοικία του Νέου Φαλήρου. Μόλις μπείτε στην καρδιά του Μικρολίμανου θα σας μαγέψει αυτή η γραφική και άκρως νησιώτικη εικόνα με τα σπίτια αμφιθεατρικά κτισμένα στο λόφο, ενώ δίπλα σας θα βλέπετε αγκυροβολημένα κότερα και μικρά καΐκια.Τα δεκάδες μαγαζάκια που λειτουργούν κατά μήκος της παραλίας ολοκληρώνουν αυτή την εικόνα και αίσθηση νησιού.Tο φαγητό στο Μικρολίμανο φαίνεται πως τα τελευταία χρόνια έχει ανοίξει τους ορίζοντες του και είναι σε ετοιμότητα για να σας ταξιδέψει first-class στις κουζίνες του κόσμου, με διαβατήριο τα πιο γευστικά, αμιγώς επηρεασμένα ή απλώς πειραγμένα από τις διεθνείς κουζίνες, μενού. Απολαμβάνοντας τη θέα και το θαλασσινό αεράκι, είτε επιλέξετε τις παραδοσιακές γεύσεις είτε πιο fusion πρότασεις,ένα είναι βέβαιο: το σημερινό σας γεύμα θα σας ανταμείψει!",
          });
          
          var pinGraphic = new Graphic({
            geometry: pinPoint,
            symbol: pinSymbol,
            popupTemplate: popupTemplate,
          });

          //Μαρίνα Ζέας
            var pinPoint2 = new Point({
            longitude: 23.646385192055675,
            latitude: 37.93825308332992, 
          });

          var pinSymbol2 = {
            type: "simple-marker",
            color: "red",
            size: "20px",
            outline: {
              color: [255, 255, 255],
              width: 3,
            },
          };

          var popupTemplate2 = new PopupTemplate({
            title: "Μαρίνα Ζέας",
            content: "Η Μαρίνα Ζέας βρίσκεται στον Πειραιά, στην ανατολική ακτή της χερσονήσου της Πειραϊκής. Η περιοχή της θάλασσας αποτελείται από δύο λιμάνια, το Πασσαλιμάνι και τη Φρεατίδα. Σε σχέση με άλλες μαρίνες, η κίνηση εδώ είναι πιο αυξημένη χάρη στα πολλά καταστήματα μέσα στη μαρίνα και τον γύρω χώρο. Η Μαρίνα Ζέας είναι ένα σημείο στον Πειραιά ιδανικό για περπάτημα, καθώς στην διαδρομή σας απολαμβάνετε την θέα της θάλασσας, του ουρανού και των κότερων. Ωστόσο, εκτός από ιδανικό μέρος για περπάτημα,είναι ιδανικό μέρος για φαγητό και ποτό καθώς διαθέτει πολύ ενδιαφέροντα μαγαζιά και διεθνείς κουζίνες για όλα τα γούστα, όπως Ιταλικό, Μεξικάνικο, Ασιάτικο,Αμερικανικό και άλλα πολλά.",
          });

          var pinGraphic2 = new Graphic({
            geometry: pinPoint2,
            symbol: pinSymbol2,
            popupTemplate: popupTemplate2,
          });

          //Πειραϊκή
          var pinPoint3 = new Point({
            longitude: 23.630645292555982,
            latitude: 37.93134814338303, 
          });

          var pinSymbol3 = {
            type: "simple-marker",
            color: "green",
            size: "20px",
            outline: {
              color: [255, 255, 255],
              width: 3,
            },
          };

          var popupTemplate3 = new PopupTemplate({
            title: "Πειραϊκή",
            content: "Η Πειραϊκή αποτελεί την Νοτιοδυτική παραλιακή συνοικία του Πειραιά, βρίσκεται ανατολικά του κεντρικού λιμανιού του Πειραιά. Κατά μήκος της παραλίας της Πειραϊκής βρίσκονται τα αρχαία Μακρά Τείχη (τείχη του Κόνωνα) και το λιμάνι της. Συνορεύει στα βόρεια με την Καλλίπολη, στα ανατολικά με τον Άγιο Βασίλειο, στα δυτικά και νότια βρέχεται σε ένα τεράστιο μήκος από τον Σαρωνικό κόλπο δημιουργώντας την Πειραϊκή ακτή επί της Ακτής Θεμιστοκλέους. Κι αν ο Πειραιάς έχει να σας παρουσιάσει άπειρες επιλογές σε ψαροταβέρνες, κουτούκια, fancy εστιατόρια και πιο fast-food φιλοσοφίας στέκια, η Πειραϊκή ειδικεύεται στις “ταβερνοκαταστάσεις”.Κατά μήκος της θα βρείτε ουζερί,μεζεδοπωλεία,μπακαλοταβέρνες και ψαροταβέρνες, τα οποία έχουν χαραγμένη πάνω τους μια στάμπα αυθεντικότητας του παλιού Πειραιά, τότε που όλα ήταν λίγο πιο αγνά και πολύ πιο νόστιμα.",
          });

          var pinGraphic3 = new Graphic({
            geometry: pinPoint3,
            symbol: pinSymbol3,
            popupTemplate: popupTemplate3,
          });

          view.graphics.add(pinGraphic);
          view.graphics.add(pinGraphic2);
          view.graphics.add(pinGraphic3);
        });
      });