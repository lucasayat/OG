$(document).ready(function () {
	"use strict";

var numero = 2;
var version = 2;

	////////////////message d'attente
   $( "#gardener" ).addClass( 'blink_me');
	function timer(n) {
		$(".progress-bar").css("width", n + "%");
		setTimeout(function () {
			timer(n + 10);	
		
		}, 200);
	}
	timer(0);
	
       if(numero > 0) 
       {
	   $("a#quitter").attr('href', '/logout/');
	   }else{
		$("#quitter").attr("style", "visibility: hidden"); 
	   }
	///*
	$(window).bind('beforeunload', function(e) {
	// Your code and validation
	if (confirm) {
	 return "Le fichier jardin est-il sauvegardé ?";
	}
	});
	//*/

	////////////////////////////////////////
	/////////// VARIABLES PUBLIQUES /////////////////
	/////////////////////////////////////////

var jardinier;
var actuan = new Date().getFullYear();
var mesPatienter = "<h1 style='color:blue;font-size:50px;'>Jardin en cours de préparation.</h1>";
var colPatienter ='#f46d3b';
var imgPatienter= "/media/img/pot.jpg"
var datinit=["01-03-2015","01-05-2015","01-07-2015","01-08-2015",
             "01-08-2015","01-10-2015","01-10-2015","01-11-2015"],
    timelininit='2015-02-20';
    
	var paraleg = 
	[{
			"nom": "aucun",
			"icon": "aucun",
			"coul": "#e5f1ec",
			"X": ""
    }, {
			"nom": "artichaut",
			"icon": "artich",
			"coul": "#e796e9",
			"X": ""
    }, {
			"nom": "asperges",
			"icon": "asperg",
			"coul": "#2ff30c",
			"X": ""
    }, {
			"nom": "aubergine",
			"icon": "auber",
			"coul": "#8080ff",
			"X": ""
    }, {
			"nom": "betterave",
			"icon": "betrav",
			"coul": "#ff0080",
			"X": ""
    }, {
			"nom": "bettes",
			"icon": "chard",
			"coul": "#008080",
			"X": ""
    }, {
			"nom": "carottes",
			"icon": "carot",
			"coul": "#f1b108",
			"X": ""
    }, {
			"nom": "celeri",
			"icon": "celeriac",
			"coul": "#a3906d",
			"X": ""
    }, {
			"nom": "choux",
			"icon": "chou",
			"coul": "#abe4a2",
			"X": ""
    }, {
			"nom": "concombre",
			"icon": "conc",
			"coul": "#00b300",
			"X": ""
    }, {
			"nom": "courgettes",
			"icon": "courg",
			"coul": "#1ecf77",
			"X": ""
    }, {
			"nom": "endives",
			"icon": "endiv",
			"coul": "#f8f8e9",
			"X": ""
    }, {
			"nom": "fenouil",
			"icon": "fennel",
			"coul": "#80ffff",
			"X": ""
    }, {
			"nom": "feve",
			"icon": "feve",
			"coul": "#808040",
			"X": ""
    }, {
			"nom": "fraises",
			"icon": "fraise",
			"coul": "#ff8080",
			"X": ""
    }, {
			"nom": "framboises",
			"icon": "framb",
			"coul": "#fbe2fe",
			"X": ""
    }, {
			"nom": "haricots_grains",
			"icon": "bean",
			"coul": "#800000",
			"X": ""
    }, {
			"nom": "haricots_verts",
			"icon": "haricov",
			"coul": "#d7ffae",
			"X": ""
    }, {
			"nom": "mais",
			"icon": "epima",
			"coul": "#ffff00",
			"X": ""
    }, {
			"nom": "oignons",
			"icon": "onion",
			"coul": "#8000ff",
			"X": ""
    }, {
			"nom": "panais",
			"icon": "panais",
			"coul": "#c9c994",
			"X": ""
    }, {
			"nom": "poireaux",
			"icon": "leek",
			"coul": "#008040",
			"X": ""
    }, {
			"nom": "pois",
			"icon": "pois",
			"coul": "#41fc70",
			"X": ""
    }, {
			"nom": "poivrons",
			"icon": "pepper",
			"coul": "#d2d200",
			"X": ""
    }, {
			"nom": "p-de-terre",
			"icon": "potato",
			"coul": "#804040",
			"X": ""
    }, {
			"nom": "potirons",
			"icon": "pum",
			"coul": "#ffc891",
			"X": ""
    }, {
			"nom": "radis",
			"icon": "radis",
			"coul": "#fdace7",
			"X": ""
    }, {
			"nom": "salade",
			"icon": "salad",
			"coul": "#04fb4f",
			"X": ""
    }, {
			"nom": "tomates",
			"icon": "tomat",
			"coul": "#ff0000",
			"X": ""
    }, {
			"nom": "navets",
			"icon": "turnip",
			"coul": "#c0c0c0",
			"X": ""
    }, {
			"nom": "epinards",
			"icon": "spin",
			"coul": "#20ff20",
			"X": ""
    }, {
			"nom": "mache",
			"icon": "mache",
			"coul": "#3815a2",
			"X": ""
    }, {
			"nom": "melon",
			"icon": "melon",
			"coul": "#ffc891",
			"X": ""
    },{
			"nom": "ananas",
			"icon": "pineapple",
			"coul": "#ffc891",
			"X": ""
    },{
			"nom": "songe",
			"icon": "taro",
			"coul": "#ffc891",
			"X": ""
    } 
    ],

		caro,
		col_parcelle = "#f4efe9",
		select,
		leges = 20,
		fijar = [],
		leglist = [],
		legid = [],
		legicon = [],
		arbricon = [],
		nomParSelect = "aucune",
		parid = [],
		///// 1: nb rangs1 ; 2: nb rangs2 ; 3: numleg1 ; 4: numleg2
		coord_parcelle = {},
		parcelles = [],
		arbres=[],
		allees=[],
		dims=[],
		/////// parcelles de la dernière année du fichier jardin
		nom_parcelles = [],
		indican=1,
		dim=[],
		ob;

	////////////////////////////////////////
	/////////// ICONES   /////////////////
	/////////////////////////////////////////
	
	for (var i = 0; i < paraleg.length; i++) {
		leglist.push(paraleg[i].nom);
	}
	for ( i = 0; i < paraleg.length; i++) {
		legid.push(paraleg[i].icon);
	}
	//console.log(leglist);
	//console.log(legid);

	for ( i = 0; i < legid.length; i++) {
		var legic = document.getElementById(legid[i]);
		legicon.push(legic);
	}
	
	// console.log(legicon);

	var trid = ['apple', 'apricot', 'cherry', 'pear', 'plum', 'peach', 'rubarb', 'gb','maracuja'];
    var nomarbres = ['pommier', 'abricotier', 'cerisier', 'poirier', 'prunier', 'pêcher', 'rubharbe', 'groseiller','fruit de la passion'];
    
	for ( i = 0; i < trid.length; i++) {
		var arbric = document.getElementById(trid[i]);
		arbricon.push(arbric);
	}
	//console.log(arbricon);
	
	////////////////////////////////////////
	/////////// CANVAS INIT  /////////////////
	/////////////////////////////////////////
	//////////// construire les jardins
	var can1 = {
		a: new fabric.Canvas('can1a'),
		b: new fabric.Canvas('can1b'),
		c: new fabric.Canvas('can1c')
	};
	var can2 = {
		a: new fabric.Canvas('can2a'),
		b: new fabric.Canvas('can2b'),
		c: new fabric.Canvas('can2c')
	};
	var can3 = {
		a: new fabric.Canvas('can3a'),
		b: new fabric.Canvas('can3b'),
		c: new fabric.Canvas('can3c')
	};


    ////////////////////////////////////////
	/////////// Initialisation et  sauvegarde /////////////////
	/////////////////////////////////////////


	////////////////: socket io importation de fijarinit  et remplissage des jardins

	var socket = io.connect();

   socket.emit("jardin","jardin"+numero);

	socket.on('fijar', function (data,mes) {
		fijar = data;
        console.log(mes);
        initial(1);
        appendan("#jaran");
        appendan("#selegan");
	});
	
	////////// rappel ancien fijartemp
	
   $('#rappel').click (function(){
      
     window.loading_screen = window.pleaseWait({
        logo: imgPatienter,
        backgroundColor:colPatienter ,
        loadingHtml:mesPatienter
        }); 
      
	$( "#gardener" ).addClass( 'blink_me');
	$( "#progression" ).addClass( 'blink_me');
	
	socket.emit("rappel"+numero,"ready");
		
    socket.on('temp'+numero, function (data,mes) {
		fijar = data;
        console.log(mes);
        //console.log("dataemp :"+JSON.stringify(data));
       
        initial(1);
        appendan("#jaran");
        appendan("#selegan");
	});
  $('#rappel').attr("style", "visibility: hidden");
    window.loading_screen.finish();

 });


 $('#changan').click (function(){
   window.loading_screen = window.pleaseWait({
        logo: imgPatienter,
        backgroundColor:colPatienter ,
        loadingHtml:mesPatienter
        });
		
 $( "#gardener" ).addClass('blink_me');
 $( "#progression" ).addClass('blink_me');

    var arran = [];
    var choixan;
     
 for (var  i=fijar.length-1;i>=0; i--)
   {
	arran.push(fijar[i].an);
	console.log(fijar[i].an);
  }
     choixan =$('#jaran').val();
     indican = 1+arran.indexOf(Number(choixan));
     console.log(arran);
     initial(indican);
     
   window.loading_screen.finish();
 });



$('#newjardinier').click (function(){	

    fijar[fijar.length-1].jardinier = $('#jardinier').val();
    socket.emit('modifijar'+numero, fijar);
    
     });


	////////////////// télécharger un fichier json des données du jardin perso

	
document.getElementById('jarold').addEventListener('change', readSingleFile, false);

    $("#jarold").click(function () {

		$( "#gardener" ).addClass( 'blink_me');
		$( "#progression" ).addClass( 'blink_me');
		appendan();
		  
	});

    
	function readSingleFile(evt) {
			
		var f = evt.target.files[0];
		if (f) {
			var r = new FileReader();
			r.onload = function (e) {
				var data = e.target.result;
				//console.log(data);
				fijar = JSON.parse(data);
				
				initial(1);
			 appendan("#jaran");
			 appendan("#selegan");	      
			console.log("fijar envoyé à app.js à :"+ new Date());
			socket.emit('modifijar'+numero, fijar);			
            
			};
			r.readAsText(f);
			
		} else {
			alert("Le fichier n'a pas été téléchargé.");
			 
		}        		
	}


   function initial(n){
    
         can1.a.clear();
         can1.b.clear();
         can1.c.clear();
         can2.a.clear();
         can2.b.clear();
         can2.c.clear();
         can3.a.clear();
         can3.b.clear();
         can3.c.clear();
                      
         var fijaran = fijar[fijar.length - n];
         console.log(fijaran);
         if (fijaran.dim)
         {
		  dim = fijaran.dim;
					 if(dim.length>3)
					{
						caro = parseInt(dim[3].caro);
					}else{
						      if(fijar[fijar.length-1].dim.length>3)
						      {
								caro = fijar[fijar.length-1].dim[3].caro; 
							  }else{
								caro = 40;  
							  }    
					    }			
		 }else{
		  dim = fijar[fijar.length-1].dim;
                
		  
		 }
     	      
         $('#jar1nom').val(dim[0].nom);
         $('#jar1perso').text(dim[0].nom);
         $('#verg1').text(dim[0].nom);
	     $('#larg1').val(parseInt(dim[0].larg,10));
	     $('#long1').val( parseInt(dim[0].long));
	     $('#jar2nom').val( dim[1].nom);
	     $('#verg2').text( dim[1].nom);
	     $('#jar2perso').text(dim[1].nom);
		 $('#larg2').val(parseInt(dim[1].larg,10));
		 $('#long2').val( parseInt(dim[1].long));
		 $('#jar3nom').val(dim[2].nom);
		 $('#jar3perso').text(dim[2].nom);
		 $('#verg3').text(dim[2].nom);
		 $('#larg3').val(parseInt(dim[2].larg,10));
		 $('#long3').val(parseInt(dim[2].long,10));
         $("#caropix").val(caro,10);
		  
	      
		 var w_can1 = parseInt(dim[0].larg,10) * caro;
		 var h_can1 = parseInt(dim[0].long,10) * caro;
		 var w_can2 = parseInt(dim[1].larg,10) * caro;
		 var h_can2 = parseInt(dim[1].long,10) * caro;
		 var w_can3 = parseInt(dim[2].larg,10) * caro;
		 var h_can3 = parseInt(dim[2].long,10) * caro;

          parcelles =[];
          nom_parcelles =[];
		  parcelles = fijaran.par;
		///// parcelles de la dernière année
		for (var i = 0; i < parcelles.length; i++) {
			nom_parcelles.push(parcelles[i].parcelle);
		      }
          console.log("parcelles télechargées :"+nom_parcelles);
        dims= fijaran.dim;
        allees= fijaran.all;
		arbres = fijaran.fruit;
        jardinier =fijaran.jardinier;
		jarset(1, can1.a, can1.b, can1.c, w_can1, h_can1);
		jarset( 2, can2.a, can2.b, can2.c, w_can2, h_can2);
		jarset( 3, can3.a, can3.b, can3.c, w_can3, h_can3);
     
		//console.log("dims ="+JSON.stringify(dims)+"allees ="+JSON.stringify(allees)+"arbres ="+JSON.stringify(arbres));
            $('#nbarb').text(arbres.length);
            $('#typeleg').text(nbleg());
			$('#nbparcelles').text(parcelles.length);
			$("#gardener").removeClass('blink_me');
			$("#progression").removeClass('blink_me');
			$('#jardinier').val(jardinier);
				$('#version').text("OpenGarden version"+' '+fijaran.version+" "+"- Licence GPL v3.");
		 fijaran.version = version;  
         appendan("#supan");
        			
}

    ///////////// ajout et sup d'années
        $('#ajoutan1').click (function(){
         var jar = fijar[fijar.length-1];
         var new_jardin= {"all":jar.all,
			               "an":parseInt(jar.an,10)+1,
			               "dim":jar.dim,
			               "fruit":jar.fruit,
			               "jardinier":jar.jardinier,
			                "par":jar.par,
			               "version":jar.version};
          var varan = parseInt(jar.an,10)+1;
              swal({
				title: "Initialisation de l'année :"+varan,
				text: "Cette année sera identique à l'an dernier et il suffira de modifier les parcelles."+
				 "Elle apparaitra dorénavant par défaut lors du téléchargement ou du rappel jardin."+
				 "Après avoir validé, attendre la fermeture de cette fenêtre pour commencer à travailler."+
				 "\n Effectuer cette opération?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor:"#DD6B55",
				confirmButtonText: "Oui",
				cancelButtonText: "Non",
				closeOnConfirm: false
			}, function () {
			     
         fijar.push(new_jardin);
         //console.log('fijar après new jardin ;'+JSON.stringify(fijar));
          console.log("fijar envoyé à app.js à :"+ new Date());
		 socket.emit('modifijar'+numero, fijar);
         initial(1);
         appendan("#jaran");
  swal({title:"Année "+varan+" ajoutée au fichier.",text:"Bon courage pour la suite.",type:'success',timer:2000,showConfirmButton:false}); 
   		
			});
	    });
 
  
       $('#ajoutan2').click (function(){
         var jar = fijar[fijar.length-1];
         var new_jardin= {"all":jar.all,
			               "an":jar.an+1,
			               "dim":jar.dim,
			               "fruit":jar.fruit,
			               "jardinier":jar.jardinier,
			                "par":[],
			               "version":jar.version};

			               
        var varan = parseInt(jar.an,10)+1;
              swal({
				title: "initialisation de l'année :"+varan,
				text: "Les jardins de cette année n'auront pas de parcelles et il faudra les créer. Cette année apparaitra dorénavant par défaut lors du téléchargement ou du rappel jardin.",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor:"#DD6B55",
				confirmButtonText: "Oui",
				cancelButtonText: "Non",
				closeOnConfirm: false,
				closeOnCancel: true
			}, function () {
			
		console.log(' new jardin ;'+JSON.stringify(new_jardin)); 
         fijar.push(new_jardin);
         //console.log('fijar après new jardin ;'+JSON.stringify(fijar));
      
          console.log("fijar envoyé à app.js à :"+ new Date());
		 socket.emit('modifijar'+numero, fijar);
         initial(1);
          appendan("#jaran");
		 swal({title:"Année "+varan+" ajoutée au fichier.",text:"Bonne chance pour la suite.",type:'success',timer:2000,showConfirmButton:false}); 		
			});  
	    });


        $('#otan').click (function(){
        var anasup = $('#supan').val();
              swal({
				title: "Suppression de l'année :"+anasup,
				text: "Cette année sera définitivement supprimée de votre fichier jardin." +
				 "Il est fortement recommandé de faire une sauvegarde avant d'effectuer cette opération."+
				 "\n Confirmer?",
				type: "warning",
				showCancelButton: true,
				confirmButtonColor:"#DD6B55",
				confirmButtonText: "Oui",
				cancelButtonText: "Non",
				closeOnConfirm: false,
				closeOnCancel: true
			}, function () {
				
        console.log(anasup);
        var selan = $.grep(fijar, function (element, index) {
				return element.an == parseInt(anasup,10);
			})[0];
		var indsupan = fijar.indexOf(selan);
		fijar.splice(indsupan,1);
          console.log("fijar envoyé à app.js à :"+ new Date());
		 socket.emit('modifijar'+numero, fijar);
         initial(1);
          appendan("#jaran");
		swal({title:"Année "+anasup+" supprimée du fichier.",type:'success',timer:2000,showConfirmButton:false}); 
			});
        
		});



 /////////////////////// ajout des listes selection
 //////////////// selection des années
				function appendan(divan)
				{
				var arr = [];
				 for (var  i=fijar.length-1;i>=0; i--)
				 {
					var anjar= {val : fijar[i].an, text: fijar[i].an};
					arr.push(anjar);
				 }
                //$(divan).find('option').remove().end();
                $(divan).empty();
				$.each(arr,function(val,text) {
					
				 $(divan).append($("<option></option>").attr('value',this.val).text(this.text));
				 
				});
				//$('#jaran option[value = 2015]').remove();
							/////////	
				}

/////////////////////// OJO selection des légumes

				function selegume()
				{
				var select_legumes= [];
				 for (var  i=0 ; i<leglist.length ; i++)
				 {
					var legi= {val : leglist[i], text: leglist[i]};
					select_legumes.push(legi);
				 }
               console.log(JSON.stringify(select_legumes));
               
				$.each(select_legumes,function(val,text) {
				 $("#legum1").append($("<option></option>").attr('value',this.val).text(this.text));
				 $("#legum2").append($("<option></option>").attr('value',this.val).text(this.text));
				});
				
				}
				
                selegume();

	/////////// SELECTIZE  configure legumes  /////////////////
	/////////////////////////////////////////

	var $legum1 = $('#legum1').selectize({
		plugins: ['remove_button'],
		persist: false
	});

	var $legum2 = $('#legum2').selectize({
		plugins: ['remove_button'],
		persist: false
	});

                
 //////////////////////////////
	/////////// sauvegarde d'un fichier json

	document.getElementById("fichactu").onclick = function () {
		    var data = JSON.stringify(fijar);
            var url = 'data:text/json;charset=utf8,' + encodeURIComponent(data);

            var link = document.createElement("a");
            console.log("link :"+link);
            link.href = url;
            var date = new Date().toJSON().slice(0, 10);
            link.download = "jardin" + date + ".json";

            //this part will append the anchor tag and remove it after automatic click
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
	};
	
     //////////////////////////////////////////////////////////////////
	/////////// Dimensions     /////////////////
	////////////////////////////////////////////////////////////////////
      
    $('#dimactu').click (function(){
      window.loading_screen = window.pleaseWait({
        logo: imgPatienter,
        backgroundColor:colPatienter ,
        loadingHtml:mesPatienter
        });
		
	     var newdim =[
	     {
             "nom":$('#jar1nom').val(),
			 "larg": $('#larg1').val(),
			 "long":$('#long1').val()
		 },
		 {
             "nom":$('#jar2nom').val(),
			"larg": $('#larg2').val(),
			 "long":$('#long2').val() 
		 },
		 {
            "nom":$('#jar3nom').val(),
			"larg": $('#larg3').val(),
			"long":$('#long3').val() 
		 },
		 {
			 "caro":Number($("#caropix").val())
		 }
	       ];
    console.log("newdim :"+JSON.stringify(newdim));

      fijar[fijar.length - 1].dim = newdim;
     
	socket.emit("modifijar"+numero,fijar);
	
        initial(1);
        window.loading_screen.finish();
 });




	//////////////////////////////////////////////////////////////////
	/////////// SELECTIONS des objets et infos parcelles/////////////////
	////////////////////////////////////////////////////////////////////

	function quit(jardin) {
		jardin.deactivateAll().renderAll();
		var nomParselect = "aucune";
		$('#parsel').text("aucune");
		$('#rang1').val(0);
		$('#rang2').val(0);
		$legum1[0].selectize.setValue("aucun");
		$legum2[0].selectize.setValue("aucun");
		$('#sem1').datepicker('setDate', datinit[0]);
		$('#plant1').datepicker('setDate', datinit[1]);
		$('#rec1').datepicker('setDate', datinit[2]);
		$('#finrec1').datepicker('setDate', datinit[3]);
		$('#sem2').datepicker('setDate', datinit[4]);
		$('#plant2').datepicker('setDate', datinit[5]);
		$('#rec2').datepicker('setDate', datinit[6]);
		$('#finrec2').datepicker('setDate', datinit[7]);
		$('#com1').val("");
		$('#com2').val("");
	}

   function quitverger(jardin) {
		jardin.deactivateAll().renderAll();
		     $('#esp').val(1);
             $('#nom').val('espece');
             $('#size').val(1);
             $('#plantan').val("");
			 $('#comarb').val("");	 
	}


	////////// fcts selection

	var objact = {};
	////////////////: conversion des dates au format dd/MM/yyyy
	function convertDate(inputFormat) {
		function pad(s) {
			return (s < 10) ? '0' + s : s;
		}

		var d = new Date(inputFormat);
		return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('/');
	}

	function parselect(objact) {
		if (objact && objact._objects) {
			nomParSelect = objact._objects[1].text;
			//parcelles = fijar[fijar.length - 1].par;
			var parSel = $.grep(parcelles, function (element, index) {
				return element.parcelle == nomParSelect;
			})[0];
			console.log(JSON.stringify(parSel));
			if (parSel) {
				$('#parsel').text(nomParSelect);
				$('#rang1').val(parSel.nbran);
				$('#rang2').val(parSel.nbran2);
				$legum1[0].selectize.setValue(parSel.legume);
				$legum2[0].selectize.setValue(parSel.legume2);
				$('#sem1').datepicker('setDate', convertDate(parSel.datesem));
				$('#plant1').datepicker('setDate', convertDate(parSel.dateplant));
				$('#rec1').datepicker('setDate', convertDate(parSel.daterec));
				$('#finrec1').datepicker('setDate', convertDate(parSel.finrec));
				$('#sem2').datepicker('setDate', convertDate(parSel.datesem2));
				$('#plant2').datepicker('setDate', convertDate(parSel.dateplant2));
				$('#rec2').datepicker('setDate', convertDate(parSel.daterec2));
				$('#finrec2').datepicker('setDate', convertDate(parSel.finrec2));
				$('#com1').val(parSel.comment);
				$('#com2').val(parSel.comment2);
			}
		} else {
			nomParSelect = "aucune";
			$('#parsel').text(nomParSelect);
			$('#rang1').val(0);
			$('#rang2').val(0);
			$legum1[0].selectize.setValue("aucun");
			$legum2[0].selectize.setValue("aucun");
			$('#sem1').datepicker('setDate', datinit[0]);
			$('#plant1').datepicker('setDate', datinit[1]);
			$('#rec1').datepicker('setDate', datinit[2]);
			$('#finrec1').datepicker('setDate', datinit[3]);
			$('#sem2').datepicker('setDate', datinit[4]);
			$('#plant2').datepicker('setDate', datinit[5]);
			$('#rec2').datepicker('setDate', datinit[6]);
			$('#finrec2').datepicker('setDate', datinit[7]);
			$('#com1').val("");
			$('#com2').val("");
		}

	}

	///////////selection des parcelles
	can1.a.on('mouse:down', function () {
		objact = can1.a.getActiveObject();
		//console.log("objact :"+JSON.stringify(objact));
		parselect(objact);
	});

	can2.a.on('mouse:down', function () {
		objact = can2.a.getActiveObject();
		parselect(objact);
	});

	can3.a.on('mouse:down', function () {
		objact = can3.a.getActiveObject();
		parselect(objact);
	});

	///////////deselection des parcelles en passant à un autre jardin

	var b = "#tab-6734-1";
	$("a").click(function (event) {
		b = $(event.target).closest('a').attr('href');
		if (b != "#tab-6734-1") {
			quit(can1.a);
		}
		if (b != "#tab-6734-2") {
			quit(can2.a);
		}
		if (b != "#tab-6734-3") {
			quit(can3.a);
		}
	});

///////////deselection des arbres en passant à un autre jardin

	var c = "#tab-5538-1";
	$("a").click(function (event) {
		c = $(event.target).closest('a').attr('href');
		if (c != "#tab-5538-1") {
			quitverger(can1.c);
		}
		if (c != "#tab-5538-2") {
			quitverger(can2.c);
		}
		if (c != "#tab-5538-3") {
			quitverger(can3.c);
		}
	});



	////////////////////////////////////////
	/////////// BOUTONS /////////////////
	/////////////////////////////////////////
	//////// CREER
	var init = false;
	var checkad = false;

	$("#create1").click(function () {
		quit(can1.a);
		rectad(can1.a);
		init = true;
	});
	$("#create2").click(function () {
		quit(can2.a);
		rectad(can2.a);
		init = true;
	});
	$("#create3").click(function () {
		quit(can3.a);
		rectad(can3.a);
		init = true;
	});

	////// enregistrer

	$("#save1").click(function () {
		modifold(can1.a);
	});
	$("#save2").click(function () {
		modifold(can2.a);
	});
	$("#save3").click(function () {
		modifold(can3.a);
	});

	////////////supprimer

	$("#del1").click(function () {
		deleteObject(can1.a);
	});
	$("#del2").click(function () {
		deleteObject(can2.a);
	});
	$("#del3").click(function () {
		deleteObject(can3.a);
	});

	/////////renommer une parcelle
	$("#rename1").click(function () {
		nouvelid(can1.a);
	});
	$("#rename2").click(function () {
		nouvelid(can2.a);
	});
	$("#rename3").click(function () {
		nouvelid(can3.a);
	});
	
     ////////////////////////////////////////
	/////////// planning time-line /////////////////
	/////////////////////////////////////////
	


                var limitime;

     $('#planning').click (function(){
		 
        limitime =fijar[fijar.length - indican].an+'-02-20';
         planningLeg(parcelles,limitime);
         
         
                         
     });

     $('#change_selegan').click (function(){
		 var arran = [];
          var choixan;
     
			 for (var  i=fijar.length-1;i>=0; i--)
			   {
				arran.push(fijar[i].an);
				console.log(fijar[i].an);
			  }
				 choixan =$('#selegan').val();
				 indican = 1+arran.indexOf(Number(choixan));
				 console.log(indican);
				 limitime =choixan+'-02-01'; 
				 var parcan = fijar[fijar.length - indican].par;
				 console.log(limitime,JSON.stringify(parcan)); 
				  planningLeg(parcan,limitime); 
		 
	 });

   
   function planningLeg(parcelles,limitime){
                               var parordon=[];                           
                               $('#svg').remove();
                               console.log('ancien svg effacé');
                               var data=[];
                              
                               // var today = new Date();
            var time0 = new Date(limitime).getTime();
            var showdate = $("#dateleg").datepicker("getDate");
            var width = 1000;

            nv.addGraph(function() {
                var chart = d3.timeline()
                    .beginning(time0)
                    .tickFormat( //
                        {
                            format: d3.time.format("%d/%m"),
                            tickTime: d3.time.months,
                            tickInterval: 1,
                            tickSize: 6
                        })
                    .rotateTicks(45)   
                    .showToday()
                    .showTodayFormat({
                        marginTop: 60,
                        marginBottom: 0,
                        width: 2,
                        color: 'blue'
                    })
                    .showBorderLine()
                    .showBorderFormat({marginTop:60 , marginBottom:0, width:0.1 , color:'#bdbdbd' })
                    .stack() // toggles graph stacking
                    .margin({
                        left: 200,
                        right: 10,
                        top: 70,
                        bottom: 0
                    });

         var timeleg = [];
                               function compare(a,b) {
                                 if (a.datesem < b.datesem)
                                               return -1;
                                 if (a.datesem> b.datesem)
                                               return 1;
                                 return 0;
                               }

      parordon=parcelles.sort(compare);
      
     for( var t=0;t<parordon.length;t++)
    {
                  if(parordon[t].legume=="aucun")
                  parordon.splice(t,1);    
                }

         for (var i=0;i<parordon.length;i++)
            {
              ////////// 1ère cultures
                var legor1 = parordon[i].legume;
                for (var j=0;j<legor1.length;j++)
                {
                 var time ={};
                 var legind = leglist.indexOf(legor1[j]);
                 time =
                   {
                    icon :"/media/veg/"+legid[legind]+".png",
                    label: legor1[j]+"("+parordon[i].parcelle+")",
                     times:[{
                        "color": '#4CFF00',
                        "starting_time": new Date(parordon[i].datesem).getTime(),
                        "ending_time": new Date(parordon[i].dateplant).getTime()
                    }, {
                       "color": '#44BF44',
                        "starting_time": new Date(parordon[i].dateplant).getTime(),
                        "ending_time": new Date(parordon[i].daterec).getTime()
                     }, {
                        "color": '#FBFA8F',
                        "starting_time": new Date(parordon[i].daterec).getTime(),
                        "ending_time": new Date(parordon[i].finrec).getTime()
                            }
                             ]
                    };
                    timeleg.push(time);    
                    }
               /////////TODO 2èmes cultures a faire

                                               }

         var svg = d3.select("#planleg").append('svg').attr("width", 1000).attr("id","svg")
         .datum(timeleg).call(chart);

                nv.utils.windowResize(chart.update);   
           });

         }  


	////////////////////////////////////////
	/////////// datatables   /////////////////
	/////////////////////////////////////////

   $("#plus").click(function(){
   //$('#nomdparcelles').text(JSON.stringify(nom_parcelles));
    var dataNomParcel =[];  
   	//console.log(JSON.stringify(parcelles)); 
   	for(var i=0; i< parcelles.length ; i++)
   	   {
   	   	var parci =[];
   	   	parci.push(parcelles[i].parcelle);
   	   	parci.push(parcelles[i].jardin);
   	   	dataNomParcel.push(parci);
   	   	 }	 
   	   	//console.log("NomParcel :"+JSON.stringify(dataNomParcel)); 
   	   	
			$('#nomdparcelles').dataTable( {
           destroy: true,								 	  
           data: dataNomParcel,
             "columns": [
				{ "title": "Identifiant parcelle" },
				{ "title": "Dans jardin N°" }
                     ],
               "pageLength": 100,
                "sDom": 't',    
             "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {$('td', nRow).css('background-color', 'black');}        
            }); 
    });

  $("#plus").click(function(){
   //$('#nomdparcelles').text(JSON.stringify(nom_parcelles));
    var datarbres =[];  
   	console.log(JSON.stringify(arbres)); 
   	for(var i=0; i< arbres.length ; i++)
   	   {
   	   	var arb =[];
   	   	arb.push(nomarbres[arbres[i].scr-1]);
   	    arb.push(arbres[i].nom);
   	   	datarbres.push(arb);
   	   	 }	 
   	   	console.log("datarbres :"+JSON.stringify(datarbres)); 
   	   	
			$('#nbarbres').dataTable( {
           destroy: true,								 	  
           data: datarbres,
             "columns": [
				{ "title": "Fruitier" },
				{ "title": "Variété" }
                     ],
               "pageLength": 100,
                "sDom": 't',    
             "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {$('td', nRow).css('background-color', 'black');}        
            }); 
    });

function nbleg(){
    var countleg=0;
    var valeg = tableau_legumes();
    //console.log("valeg ="+JSON.stringify(valeg));
    for (var i=0;i<valeg.length;i++)
    {
		if(valeg[i][1] !==0) {countleg = countleg+1;}
	}
 return(countleg);	
}


function tableau_legumes(){
var para = parcelles;
//console.log("para "+JSON.stringify(para));

var vala =[];
var leg;
    for (var i=1; i<leglist.length;i++)
    {
		leg={};
		leg ={"label":leglist[i],"value":0};
		vala.push(leg);	
	}
	
    for ( i= 0;i<para.length;i++)
    {
		var lega1 = para[i].legume;	
		for (var j=0;j<lega1.length;j++)
		{
			var la1=lega1[j];
			for (var k=0;k<vala.length;k++)
			{			
				//console.log("legume :"+la+"vala :"+vala[k].label+vala[k].value);
				if(la1 == vala[k].label)
				{			
					vala[k].value = vala[k].value+ 
					Math.round(10*(Math.max(para[i].width , para[i].height)*para[i].nbran/caro/lega1.length)/10);
				    
				}
			}
		}
		
		var lega2 = para[i].legume2;	
		for ( j=0;j<lega2.length;j++)
		{
			var la2=lega2[j];
			for ( var l=0;l<vala.length;l++)
			{			
				//console.log("legume :"+la+"vala :"+vala[k].label+vala[k].value);
				if(la2 == vala[l].label)
				{			
					vala[l].value = vala[l].value+ 
					Math.round(10*(Math.max(para[i].width , para[i].height)*para[i].nbran2/caro/lega2.length)/10);
				    
				}
			}
		}			
	}
   // console.log("vala :"+JSON.stringify(vala));
     
    var tab_long_legumes=[];
    var legume_long=[];
    for (var t=0;t<vala.length;t++)
    {     
       legume_long=[vala[t].label,vala[t].value,"m"];
       tab_long_legumes.push(legume_long);
		
	}
  
	// console.log("longueur légumes :"+JSON.stringify(tab_long_legumes));

return(tab_long_legumes);
	
}


 $("#plus").click(function(){

       var tab_long_legumes = tableau_legumes();
       
			$('#metrelegumes').dataTable( {
           destroy: true,								 	  
           data: tab_long_legumes,
             "columns": [
				{ "title": "Légume" },
				{ "title": "L" },
				{"title" : "u"}
                     ],
               "pageLength": 50,
                "sDom": 't',     
             "fnRowCallback": function(nRow, aData, iDisplayIndex, iDisplayIndexFull) {$('td', nRow).css('background-color', 'black');}        
            });
           
    });


//////////////////

    /////////// TODO mettre toutes les parcelles de toutes les années (sort on year)
    ////////// https://datatables.net/examples/basic_init/table_sorting.html
    
   $('#tabparcelles').click (function(){ 
    var dataParcel =[];
    var parparan =[];
    var varan=[];
   	//console.log(JSON.stringify(parcelles));
    for (var j=0; j<fijar.length ; j++)
    {
		parparan.push(fijar[j].par);
		varan.push(fijar[j].an);
	}
  
   	for (var  t=0 ; t<parparan.length; t++)
   	{
          var paran=parparan[t];
           
   	    for(var i=0; i< paran.length ; i++)
   	   {
			var parci =[];
			parci.push(varan[t]);
			parci.push(paran[i].parcelle);
			parci.push(paran[i].jardin);
			parci.push(paran[i].legume);
			parci.push(paran[i].nbran);
			parci.push(convertDate(paran[i].datesem));
			parci.push(convertDate(paran[i].daterec));
			parci.push(paran[i].legume2);
			parci.push(paran[i].nbran2);
			parci.push(convertDate(paran[i].datesem2));
			parci.push(convertDate(paran[i].daterec2));
			parci.push( (Math.round(10*paran[i].width/caro)/10).toString());
			parci.push( (Math.round(10*paran[i].height/caro)/10).toString());
			
			 dataParcel.push(parci);
   	   	}
   	}  
   	   	//console.log("dataParsel !"+JSON.stringify(dataParcel)); 
   	   	
			$('#tabParcel').dataTable( {
           destroy: true,
           order :[[0,"desc"],[2,"asc"]],
		 	//"pageLength": 20,			 	  
        data: dataParcel,
        "columns": [
            { "title": "Année" },
            { "title": "Nom de la parcelle" },
            { "title": "Numéro du jardin" },
            { "title": "Légumes (1ère culture)" },
            { "title": "Nombre de rangs"},
            { "title": "Date de semis"},
            { "title": "Date de récolte"},
            { "title": "Légumes (2ème culture)" },
            { "title": "Nombre de rangs"},
            { "title": "Date de semis"},
            { "title": "Date de récolte"},
            { "title": "largeur" },
            { "title": "longueur"}
        ]
       });
       
    });

$('#fruits').click (function(){ 
    var datArb =[];  
   	//console.log(JSON.stringify(parcelles)); 
   	for(var i=0; i< arbres.length ; i++)
   	   {
   	   	var a =[];
   	   	var esp ;
        switch(arbres[i].scr) {case 1:esp = "Pommier";break;
                               case 2:esp = "Abricotier";break;
                                case 3:esp = "Cerisier";break;
                                case 4:esp = "Poirier";break;
                                 case 5:esp = "Prunier";break;
                                 case 6:esp = "Pêcher";break;
                                 case 7:esp = "Rhubarbe";break;
                                 case 8:esp = "Groseiller";break;
                                 case 9:esp = "Fruit de la passion";break;
			                     }
   	   	a.push(esp);
   	   	a.push(arbres[i].nom);
   	   	a.push(arbres[i].jardin);
   	   	a.push(arbres[i].plantation);
   	   	a.push(arbres[i].recolte);
   	   	
   	   	 datArb.push(a);
   	   	 }	 
   	   	//console.log("dataParsel !"+JSON.stringify(dataParcel)); 
   	   	
			$('#tabArbres').dataTable( {
           destroy: true,	
		 	//"pageLength": 20,			 	  
        data: datArb,
        "columns": [
            { "title": "Espèce" },
            { "title": "Variete" },
            { "title": "Jardin" },
            { "title": "Date de plantation" },
            { "title": "Commentaires" }
        ]
       });
       
    });




    
    ////////////////////////////////////////
	/////////// légumes longueur annuelle  /////////////////
	/////////////////////////////////////////
	
	$('#barlegumes').click (function(){ 
	  //console.log("chart");
 ////////////////
 nv.addGraph(function() {
  var chart = nv.models.multiBarHorizontalChart()
      .x(function(d) { return d.label ;})    //Specify the data accessors.
      .y(function(d) { return d.value ;})
      .margin({top: 30, right: 20, bottom: 50, left: 170})   
      .showValues(true)
      .showControls(false)
      .tooltipContent(function (key, y,x, e, graph) {
                return '<h3>' +y+" en "+ key + '</h3>' +
                    '<p>' +x+" mètres"+ '</p>';
            })    
      ;
    
    chart.yAxis
        .tickFormat(d3.format('f'));
      
    chart
		.valueFormat(d3.format('f'));
     
  d3.select('#lonleg svg')
      .datum(longleg())
      .transition().duration(1200)
      .call(chart)
       ;

    
  nv.utils.windowResize(chart.update);

  return chart;
});


var para = fijar[fijar.length - 1].par;
//console.log("para "+JSON.stringify(para));
var parb;
if(fijar.length>1)
{
parb = fijar[fijar.length - 2].par;
//console.log("parb "+JSON.stringify(parb));	
}


var vala =[];
var valb=[];
var lega ={};
    for (var i=1; i<leglist.length;i++)
    {
		
		lega ={"label":leglist[i],"value":0};
		vala.push(lega);	
	}
	
    for ( i= 0;i<para.length;i++)
    {
		var lega1 = para[i].legume;	
		for (var j=0;j<lega1.length;j++)
		{
			var la1=lega1[j];
			for (var k=0;k<vala.length;k++)
			{			
				//console.log("legume :"+la+"vala :"+vala[k].label+vala[k].value);
				if(la1 == vala[k].label)
				{			
					vala[k].value = vala[k].value+ 
					Math.round(10*(Math.max(para[i].width , para[i].height)*para[i].nbran/caro/lega1.length)/10);
				    
				}
			}
		}
		
		var lega2 = para[i].legume2;	
		for ( j=0;j<lega2.length;j++)
		{
			var la2=lega2[j];
			for (var l=0;l<vala.length;l++)
			{			
				//console.log("legume :"+la+"vala :"+vala[k].label+vala[k].value);
				if(la2 == vala[l].label)
				{			
					vala[l].value = vala[l].value+ 
					Math.round(10*(Math.max(para[i].width , para[i].height)*para[i].nbran2/caro/lega2.length)/10);
				    
				}
			}
		}			
	}

	for( var t=vala.length-1;t>=0;t--)
    {
	  //console.log(vala[t].label+" "+vala[t].value);
	  if(vala[t].value===0)
	  vala.splice(t,1);	  
	 }
	 
    var legb ={};
	if(parb)
	{
	///////////: remplisage valb
	   for ( i=1; i<leglist.length;i++)
    {
		legb ={"label":leglist[i],"value":0};
		valb.push(legb);	
	}
	
	    for ( i= 0;i<parb.length;i++)
    {
		var legb1 = parb[i].legume;	
		for ( var m=0;m<legb1.length;m++)
		{
			var lb1=legb1[m];
			for ( var n=0;n<valb.length;n++)
			{							
				if(lb1 == valb[n].label)
				{			
					valb[n].value = valb[n].value+ 
					Math.round(10*(Math.max(parb[i].width , parb[i].height)*parb[i].nbran/caro/legb1.length)/10);
				    
				}				
			}
		}
		
		var legb2 = parb[i].legume2;	
		for ( var o=0;o<legb2.length;o++)
		{
			var lb2=legb2[o];
			for ( var p=0;p<valb.length;p++)
			{							
				if(lb2 == valb[p].label)
				{			
					valb[p].value = valb[p].value+ 
					Math.round(10*(Math.max(parb[i].width,parb[i].height)*parb[i].nbran2/caro/legb2.length)/10);
				    
				}
				
			}
		}
		
	}
for(  t=valb.length-1;t>=0;t--)
    {
	  //console.log(vala[t].label+" "+vala[t].value);
	  if(valb[t].value===0)
	  valb.splice(t,1);	  
	 }	


}

	 	
//console.log("vala ="+JSON.stringify(vala));	
//console.log("valb ="+JSON.stringify(valb));

function longleg() {
	if(parb)
	{
	 return  [
  {
    "key": "2015",
    "color": "#d67777",
    "values": vala
  },
  {
    "key": "2014",
    "color": "#4f99b4",
    "values": valb
  }
      ];
}else{
	 return  [
  {
    "key": "2015",
    "color": "#d67777",
    "values": vala
  }
];
	
}	
	}


 });
 
     ////////////////////////////////////////
	/////////// boutons structures  /////////////////
	/////////////////////////////////////////OJO


     /////////// OJO selectionner arbres et allées


     function select_arbre(ob){
             if(ob){
              if(ob.stroke!="transparent" && !ob.radius)
              {
				console.log("C'est une allée");
               ob.lockMovementX=true; 
               ob.lockMovementY = true;
              }else{
				console.log("C'est un arbre");
             var nomarb=ob._objects[1].text;  
             var num1 = nomarb.substr(0,1);
             var num2 = nomarb.substr(1,1);
             var num3 = nomarb.substr(2,1);
             if(num2 !="_"){num1 = num1+num2; if (num3 != "_") {num1=num1+num2+num3;}}
             
              console.log("num arbre :"+num1);
             console.log("ob arbre :"+JSON.stringify(ob1c));
             var ind;
           for (var i = 0; i < arbres.length; i++)
             {
			 if(Number(arbres[i].num) == Number(num1)) {ind=i;}
			 }
             console.log("ind arbre :"+ind);             
             console.log("esp :"+JSON.stringify(arbres[ind]));
             
             $('#esp').val(arbres[ind].scr);
             $('#nom').val(arbres[ind].nom);
             $('#size').val(arbres[ind].taille);
             $('#plantan').val(arbres[ind].plantation);
			 $('#comarb').val(arbres[ind].recolte);	 
			  } 
	       }
         }
         
          var ob1c;
          can1.c.on('mouse:down', function () {         
             ob1c = can1.c.getActiveObject();
             select_arbre(ob1c);
                   
           });
          
                
          var ob2c;
          can2.c.on('mouse:down', function () {         
             ob2c = can2.c.getActiveObject();
             select_arbre(ob2c);
                         
           });
           
          var ob3c;
          can3.c.on('mouse:down', function () {         
             ob3c = can3.c.getActiveObject();
             select_arbre(ob3c);
                        
           });
          
          
           /////////: ajouter une allée
           $("#jaral_1").click(function(){linad(can1.c);}); 
           $("#jaral_2").click(function(){linad(can2.c);}); 
           $("#jaral_3").click(function(){linad(can3.c);}); 
            /////////: ajouter un arbre
           $("#stradd_1").click (function () {circad(can1.c);});
           $("#stradd_2").click (function () {circad(can2.c);});
            $("#stradd_3").click (function () {circad(can3.c);});
        //////////// enregistrement arbres et allées
          var esp,variete,size,plantan,comarb;
    
          $("#strurec_1").click (function () {         
             esp=document.getElementById('esp').value;
             variete=document.getElementById('nom').value;
             size=document.getElementById('size').value;
             plantan=document.getElementById('plantan').value;
             comarb=document.getElementById('comarb').value;
             ob = can1.c.getActiveObject();
             if(!ob){swal("Aucun objet selectionné!","Selectionner un arbre ou une allée, remplir ses caractéristiques à droite et enregistrer."); return;}  
             var jar=1;        
             recarbral(ob,can1.c,esp,variete,size,plantan,comarb,jar);
             });
             
              $("#strurec_2").click (function () {         
             esp=document.getElementById('esp').value;
             variete=document.getElementById('nom').value;
             size=document.getElementById('size').value;
             plantan=document.getElementById('plantan').value;
             comarb=document.getElementById('comarb').value;
             ob = can2.c.getActiveObject();
             if(!ob){swal("Aucun objet selectionné!","Selectionner un arbre ou une allée, remplir ses caractéristiques à droite et enregistrer."); return;}  
             var jar=2;        
             recarbral(ob,can2.c,esp,variete,size,plantan,comarb,jar);
             });
             
               $("#strurec_3").click (function () {         
             esp=document.getElementById('esp').value;
             variete=document.getElementById('nom').value;
             size=document.getElementById('size').value;
             plantan=document.getElementById('plantan').value;
             comarb=document.getElementById('comarb').value;
             ob = can3.c.getActiveObject();
             if(!ob){swal("Aucun objet selectionné!","Selectionner un arbre ou une allée, remplir ses caractéristiques à droite et enregistrer."); return;}  
             var jar=3;        
             recarbral(ob,can3.c,esp,variete,size,plantan,comarb,jar);
             });
           
           var delob;
          $("#strudel_1").click (function () { delob = can1.c.getActiveObject();delarbral(delob,can1.c);});
          $("#strudel_2").click (function () { delob = can2.c.getActiveObject();delarbral(delob,can2.c);});
	      $("#strudel_3").click (function () { delob = can3.c.getActiveObject();delarbral(delob,can3.c);});
	      
	      ///////////////: fin structures
	////////////////////////////////////////
	/////////// FONCTIONS   /////////////////
	/////////////////////////////////////////
	//////////////////////// fct d'initialisation jardins
	function jarset( jarnum, cana, canb, canc, w, h) { ///// fichier jarinit =jardin intégral
		cana.setHeight(h);
		cana.setWidth(w);
		canb.setHeight(h);
		canb.setWidth(w);
		canc.setHeight(h);
		canc.setWidth(w);
		cana.on("after:render", function () {
			cana.calcOffset();
		});
		canc.on("after:render", function () {
			canc.calcOffset();
		});
		addgrid(cana, w, h);
		////// ou en option?
		addnum(cana, w, h);
		///// ou en option?
		addgrid(canc, w, h);
		////// ou en option?
		addnum(canc, w, h);
		///// ou en option?

		cana.renderAll();
		canb.renderAll();
		canc.renderAll();
		////////////////////////remplissage du 1er jardin
		//console.log("jarini :"+JSON.stringify(jarinit));
		//parcelles = fijarinit.par;
		var parc_jar = $.grep(parcelles, function (element, index) {
			return element.jardin == jarnum;
		});
		//var arbres = fijaran.fruit;
		var arbre_jar = $.grep(arbres, function (element, index) {
			return element.jardin == jarnum;
		});
		//var allees = jarinit[jarinit.length - 1].all;
		var all_jar = $.grep(allees, function (element, index) {
			return element.jardin == jarnum;
		});

		canfill(cana, canb, canc, parc_jar, select = true, arbre_jar, all_jar);
		limit(cana);
		limit(canc);

	}

	////////////remplissage des jardins

	function canfill(cana, canb, canc,pardon, select, ardon, aldon) {
		//////// legumes
		for (var i = 0; i < pardon.length; i++) {
			var gauche = pardon[i].left;
			var haut = pardon[i].top;
			var largeur = pardon[i].width;
			var hauteur = pardon[i].height;
			var nom = pardon[i].parcelle;
			var numleg = [];
			     numleg = pardon[i].numleg;
			var rang = pardon[i].nbran;
			var nomleg2 = JSON.stringify(pardon[i].legume2);
			var numleg2 = [];
			     numleg2 = pardon[i].numleg2;
			var rang2 = pardon[i].nbran2;
			//var parcol2 = parcol[numleg2[0] - 1];

			//console.log("g1 :"+gauche+"h :"+ haut+"l  :"+largeur+"h :"+hauteur+"nom :"+nom+ "numleg :"+numleg+" rang :"+rang);
			modifad(cana, gauche, haut, largeur, hauteur, nom, numleg, rang, select);
			if (numleg2 != 1) {
				modifad(canb, gauche, haut, largeur, hauteur, nom, numleg2, rang2, false, col_parcelle = null, nomleg2);
			}
		}

		/////////////: arbres fruitiers 

		var tri= ardon;
		for (var j = 0; j < tri.length; j++) {
			triad(cana, tri[j].l, tri[j].t, tri[j].nom, tri[j].scr, tri[j].taille, tri[j].num, false);
			triad(canb, tri[j].l, tri[j].t, tri[j].nom, tri[j].scr, tri[j].taille, tri[j].num, false);
			triad(canc, tri[j].l, tri[j].t, tri[j].nom, tri[j].scr, tri[j].taille, tri[j].num, true);
		}

       ///////////// allées
		var all = aldon;
		allee(cana, all, false);
		allee(canb, all, false);
		allee(canc, all, true);

		cana.renderAll();
		canb.renderAll();
	    canc.renderAll();
	}

	////////////////////enregistrer une nouvelle parcelle

	var parnouv = function (jardin) {

		console.log("init =" + init);
		console.log("checkad =" + checkad);

		if (init === true && checkad === false) {

			swal({
				title: "Pour creer une nouvelle parcelle",
				text: "Tracer la parcelle dans le jardin avec la souris et suivre les instructions.",
				timer: 5000,
				showConfirmButton: true,
				imageUrl: "/media/img/jardino.png",
				animation: true,
				imageSize: "200x300"
			});

			init = false;
			quit(jardin);
			return;
		} else {
			swal({
				title: "Nom ?",
				text: "Le nouvel identifiant ne doit pas déjà avoir été utilisé pour une parcelle (voir tableau des parcelles).",
				type: "input",
				showCancelButton: true,
				closeOnConfirm: false,
				animation: "slide-from-top"
			}, function (inputValue) {
				if (inputValue === false) {
					var obj;
					obj = jardin.getActiveObject();
					jardin.remove(obj);
					return false;
				}

				if (inputValue === "") {
					swal.showInputError("Un nom de parcelle ne peut être vide !");
					return false;
				}

				nomParSelect = inputValue;
				
				if (nom_parcelles.indexOf(nomParSelect) != -1) {
					swal("L'identifiant " + nomParSelect + ' ' + " existe déjà.", "Redessiner la parcelle et trouver un autre nom.");
					obj = jardin.getActiveObject();
					jardin.remove(obj);
					quit(jardin);
					return;
				} else {
					modifad(jardin);

					/////////////// enregistrement de la parcelle rajouté la parcelle à fijar
					//console.log(coord_parcelle);
					var numjar;
					if (jardin == can1.a) {
						numjar = 1;
					} else if (jardin == can2.a) {
						numjar = 2;
					} else {
						numjar = 3;
					}
					var newpar = {
						"comment": "",
						"comment2": "",
						"dateplant": convertDate(datinit[1]),
						"dateplant2": convertDate(datinit[5]),
						"daterec": convertDate(datinit[2]),
						"daterec2": convertDate(datinit[6]),
						"datesem": convertDate(datinit[0]),
						"datesem2": convertDate(datinit[4]),
						"finrec": convertDate(datinit[3]),
						"finrec2": convertDate(datinit[7]),
						"height": coord_parcelle.height,
						"jardin": numjar,
						"left": coord_parcelle.left,
						"legume": ["aucun"],
						"legume2": ["aucun"],
						"nbran": 1,
						"nbran2": 1,
						"numleg": [1],
						"numleg2": [1],
						"parcelle": coord_parcelle.parcelle,
						"top": coord_parcelle.top,
						"type": "group",
						"width": coord_parcelle.width
					};
					//console.log(newpar);
					parcelles.push(newpar);
					nom_parcelles.push(coord_parcelle.parcelle);
					
                     $('#nbparcelles').text(parcelles.length);
					
					//console.log("parcelles de parnouv:"+JSON.stringify(parcelles));
					//console.log("nom_parcelles de parnouv :"+JSON.stringify(nom_parcelles));
					
					socket.emit('modifijar'+numero, fijar);
                    console.log("fijar de parnouv envoyée");

					swal("La nouvelle parcelle " + inputValue + " est ajoutée au jardin!", "Poursuivre en selectionnant cette parcelle, puis renseigner sur le panneau de droite les élements à y ajouter et  les enregistrer", "success");
					quit(jardin);
				}
			});
		}
	};

	/////////// fct delete parcelle

	function deleteObject(jardin) {
                 /////////////// reconstruction du tableau des noms de parcelles
                 //nom_parcelles =[];
                  //for (var i = 0; i < parcelles.length; i++) {nom_parcelles.push(parcelles[i].parcelle);}
                 /////////////////
		
		var delobj = jardin.getActiveObject();
		// console.log(delobj._objects[1].text);
		if (delobj) {

			if (delobj._objects) {
				var parsup = delobj._objects[1].text;
				//var del_h = confirm("Supprimer la parcelle :" + parsup + " ?")
				swal({
					title: "Supprimer la parcellle :" + parsup + "?",
					text: "La parcelle _ " + parsup + " _ sera définitivement supprimée!",
					type: "warning",
					showCancelButton: true,
					confirmButtonClass: "btn-danger",
					confirmButtonText: "Oui",
					cancelButtonText: "Non",
					closeOnConfirm: true,
					closeOnCancel: true
				}, function (isConfirm) {
					if (isConfirm === true) {
						sup(jardin,parsup,delobj);
						quit(jardin);	
					} else {
						quit(jardin);
					}
				});

			}
		}
	}

             function sup(jardin,parsup,delobj) {
                       //console.log("nom de parcelles avant suppression:"+JSON.stringify(nom_parcelles));
						var delind = nom_parcelles.indexOf(parsup);
						//console.log("L'index de la parcelle à supprimer est :" + delind);

						parcelles.splice(delind, 1);
						nom_parcelles.splice(delind, 1);
						
						//console.log("nom de parcelles après delete :"+JSON.stringify(nom_parcelles));

                       $('#nbparcelles').text(parcelles.length);

						jardin.remove(delobj);
						socket.emit('modifijar'+numero, fijar);
                       console.log("fijar de delete envoyée");
					} ///// fin fct sup jardin


	///////// fct RENOMMER parcelle



	var nouvelid = function (jardin) {
                 /////////////// reconstruction du tableau des noms de parcelles (séurité)
                 nom_parcelles =[];
                 for (var i = 0; i < parcelles.length; i++) {nom_parcelles.push(parcelles[i].parcelle);}
                 /////////////////
		
		if (nomParSelect != "aucune") {
			swal({
				title: "Changer le nom de la parcelle :" + nomParSelect + "?",
				text: "Le nouvel identifiant ne doit pas déjà avoir été utilisé pour une parcelle (voir tableau des parcelles).",
				type: "input",
				showCancelButton: true,
				closeOnConfirm: true,
				animation: "slide-from-top"
			}, function (inputValue) {
				if (inputValue === false) {
					quit(jardin);
					return false;
				}

				if (inputValue === "") {
					swal.showInputError("Le nom est vide");
					quit(jardin);
					return false;
				}

				var newname = inputValue;
				/////////test nouveau nom de parcelle existant

				if (nom_parcelles.indexOf(newname) != -1) {
					alert("L'identifiant " + newname + " Existe déjà, trouver un autre nom.");
					same = false;
					quit(jardin);
					return;
				} else {
                   
					var ind = nom_parcelles.indexOf(nomParSelect);
					//console.log("nom_parcelles rename :"+JSON.stringify(nom_parcelles)+"index :"+ind);
					parcelles[ind].parcelle = newname;
					nomParSelect = newname;
					
					//console.log("numleg :" + parcelles[ind].numleg);
					
					var numleg = [];
					numleg = parcelles[ind].numleg;
					var rang = parcelles[ind].nbran;
					parid.push(parcelles[ind].nbran);
					parid.push(1);
					parid.push(parcelles[ind].numleg);
					parid.push([1]);
					modifad(jardin, select = true);

					nom_parcelles[ind] = newname;
             //console.log("nom_parcelles après rename :"+JSON.stringify(nom_parcelles));
			 //console.log("parcelles après rename :"+JSON.stringify(parcelles));		
					socket.emit('modifijar'+numero, fijar);
				    console.log("fijar envoyé au serveur");
					quit(jardin);
				}
			});
		} else {

			swal({
				title: "Selectionner une parcelle",
				text: "et ressayer.",
				timer: 5000,
				showConfirmButton: true,
				type: "warning"
			});

			return;
		}
	};

	/////////////////////////////////////////////////:
	/////// modifier les composantes d'une parcelle
	////////////////////////////////////////////:
	var modifold = function (jardin) {
		console.log("parcelle à modifier :" + nomParSelect);
          var nbrang1, leg1=[], nbrang2,leg2=[];
        
		if (nomParSelect == "aucune") {
			swal({
				title: "Pour modifier une nouvelle parcelle",
				text: "la selectionner au préalable.",
				timer: 5000,
				showConfirmButton: true,
				type: "warning"
			});
			return;
		} else {

                var  sem1 = $("#sem1").datepicker("getDate");
				var  plant1 = $("#plant1").datepicker("getDate");     
                var  sem2 = $("#sem2").datepicker("getDate");
				var  plant2 = $("#plant2").datepicker("getDate");
                var  rec1 = $("#rec1").datepicker("getDate");
				var  finrec1 = $("#finrec1").datepicker("getDate");
				var  rec2 = $("#rec2").datepicker("getDate");
				var  finrec2 = $("#finrec2").datepicker("getDate");

                var rec=true;
                if(plant1<sem1) {swal( "Dans la 1ère période de culture",
					"La date de plantation ne peut être antérieure à la date de semis! Si les plants sont achetés, dates identiques, si le semis a été fait en place mettre la même date pour plantation et début de récolte."); rec=false;}
				if(rec1<sem1 || rec1<plant1) {swal("Dans la 1ère période de culture","La date de récolte ne peut être antérieure à celle de semis ou de plantation!"); rec=false;}	
                if(plant2<sem2) {swal("Dans la 2ème période de culture","La date de plantation ne peut être antérieure à la date de semis!"); rec=false;}
				if(rec2<sem2 || rec2<plant2) {swal("Dans la 2ème période de culture","La date de récolte ne peut être antérieure à celle de semis ou de plantation!"); rec=false;}	
                if(finrec1<rec1) {swal("Dans la 1ère période de culture","La date de fin de récolte ne peut être antérieure à celle de début!"); rec=false;}
                if(finrec2<rec2) {swal("Dans la 2ème période de culture","La date de fin de récolte ne peut être antérieure à celle de début!"); rec=false;}

				nbrang1 = $('#rang1').val();				
				if($('select#legum1').val())
				{
				leg1 = $('select#legum1').val();	
				}else{
				leg1=["aucun"];	
				}

				nbrang2 = $('#rang2').val();							  
				if($('select#legum2').val())
				{
				leg2 = $('select#legum2').val();	
				}else{
				leg2=["aucun"];	
				}
                
              if(rec===true)
              {
			swal({
				title: "Modifier la parcellle :" + " " + nomParSelect + "?",
				text: nbrang1+" rangs de "+leg1+" en 1ère culture suivis de "+nbrang2+" rangs de "+leg2,
				type: "success",
				showCancelButton: true,
				confirmButtonClass: "btn-danger",
				confirmButtonText: "Oui",
				cancelButtonText: "Non",
				closeOnConfirm: true,
				closeOnCancel: true
			}, function (isConfirm) {
				
				if (isConfirm === true) {

                    change();
                    //console.log("parcelles de change modifold :"+JSON.stringify(parcelles));
					//console.log("nom_parcelles de change  modifold :"+JSON.stringify(nom_parcelles));
					//console.log("fijar de change modifold :"+JSON.stringify(fijar[fijar.length - 1].par));
               
				} else {
					quit(jardin);
				}
			});
         }
	    }
		  

		function change() {

				var numid1 = [];
				for (var i = 0; i < leg1.length; i++) {
					numid1.push(leglist.indexOf(leg1[i]) + 1);
				}
				 
				var numid2 = [];
				for (i = 0; i < leg2.length; i++) {
					numid2.push(leglist.indexOf(leg2[i]) + 1);
				}

				parid.push(nbrang1);
				parid.push(nbrang2);
				parid.push(numid1);
				parid.push(numid2);
				
				modifad(jardin);
				/////////////// reconstruction de noms de parcelles (sécurité?)
                   nom_parcelles =[];
                   for (i = 0; i < parcelles.length; i++) {nom_parcelles.push(parcelles[i].parcelle);}
				
                //console.log("nom_parcelles avant change  modifold :"+JSON.stringify(nom_parcelles));
				var parcind = nom_parcelles.indexOf(nomParSelect);
				//console.log("indice change  modifold :"+parcind)
				parcelles.splice(parcind, 1);
				////////// refaire tableau nom des parcelles
                 nom_parcelles.splice(parcind, 1);
				//////////////::
				//console.log("nom_parcelles après change  modifold :"+JSON.stringify(nom_parcelles));
                //////////// nom de parcelle non otée de fijar?
                //console.log("verif fijar après modif :"+JSON.stringify(fijar[fijar.length - 1].par));
				
				var numjar;
				if (jardin == can1.a) {
					numjar = 1;
				} else if (jardin == can2.a) {
					numjar = 2;
				} else {
					numjar = 3;
				}              
				   
				var modipar = {
					"comment": $("#com1").val(),
					"comment2": $("#com2").val(),
					"dateplant": plant1,
					"dateplant2": plant2,
					"daterec": rec1,
					"daterec2": rec2,
					"datesem": sem1,
					"datesem2": sem2,
					"finrec": finrec1,
					"finrec2": finrec2,
					"height": coord_parcelle.height,
					"jardin": numjar,
					"left": coord_parcelle.left,
					"legume": leg1,
					"legume2": leg2,
					"nbran": nbrang1,
					"nbran2": nbrang2,
					"numleg": numid1,
					"numleg2": numid2,
					"parcelle": coord_parcelle.parcelle,
					"top": coord_parcelle.top,
					"type": "group",
					"width": coord_parcelle.width
					};
                               
				//console.log(JSON.stringify(modipar));
				
				parcelles.push(modipar);
				nom_parcelles.push(nomParSelect);
				 
				socket.emit('modifijar'+numero, fijar);
				console.log("fijar modifold envoyé ");
				quit(jardin);
			
			}
		

	};
     ///////////////////////////////////////
	////////// fonction mofifad de parcelle
	////////////////////////////////////////////
	function modifad(canvas, par_l, par_t, par_w, par_h, par_nom, numleg, rang, select, col_parcelle, nomleg) {

		var echelle = 0.7;
		var obj = canvas.getActiveObject();
        var nomleg_par;
		if (col_parcelle && rang === 0) {
			col_parcelle = col_parcelle;
		} else {
			col_parcelle = "#f4efe9";
		}

		if (nomleg) {
			//nomleg_par = nomleg + "Per2";
			nomleg_par = "";
		} else {
			 nomleg_par = "";
		}

		if (obj) {
			par_l = obj.left;
			par_t = obj.top;
			par_w = obj.getWidth();
			par_h = obj.getHeight();

			if (par_l < 0 || par_t < 0) {
				par_l = obj.originalLeft;
				console.log("origLeft :" + obj.originalLeft);
				par_t = obj.originalTop;
			}

			par_nom = nomParSelect;
			numleg = parid[2];
			rang = parid[0];
			select = true;

	//console.log("canvas  :" + canvas + "l :" + par_l + "t :" + par_t + " w :" + par_w + "h  :" + par_h + "nom :" + par_nom + "numleg :" + numleg + "rang :" + rang + "select :" + select + "col :" + col_parcelle + "nomleg :" + nomleg);
	//console.log(obj);

		}

		var parect = new fabric.Rect({
			left: 0,
			top: 0,
			width: par_w,
			height: par_h,
			padding: 0,
			centeredScaling: false
		});

		parect.set('fill', col_parcelle);
		parect.setShadow("5px 5px 2px rgba(94, 128, 191, 0.5)");
		parect.set({
			strokeWidth: 3,
			stroke: '#c4dcf3'
		});

		var partext = new fabric.Text(par_nom, {
			left: 0,
			top: 0,
			fontSize: 12,
			fontFamily: "Abel",
			fontWeight: 'bold',
			textAlign: "left",
			fill: 'red'
		});

		var parnomleg = new fabric.Text(nomleg_par, {
			left: 2,
			top: 15,
			fontSize: 12,
			fontFamily: "Abel",
			fontWeight: 'bold',
			textAlign: "left",
			fill: 'blue'
		});

		var tab = [parect, partext, parnomleg];
         var esprang,lonrang;
		//console.log("numleg ;"+numleg+'rajgs :'+rang);
		//if(numleg == 0)  {var rang = 0}
		//////////// TODO % de chaque légume ou bien seult dans le calcul des longueurs?????
		if (par_h > par_w) {
			esprang = Math.round((par_w) / rang) * 0.9;
			lonrang = Math.round(par_h / leges) - 1;

		} else {
			esprang = Math.round(par_h / rang) * 0.9;
			lonrang = Math.round(par_w / leges) - 1;
			partext.setAngle(-90);
			partext.setLeft(-5);
			partext.setTop(par_h * 0.9);
		}

		var legin = 0;

		if (numleg != 1) {
			//for (var l=0 ; l < rang; l++)
			//{
			for (var t = 0; t < lonrang; t++) {
				for (var l = 0; l < rang; l++) {

					//var img = document.getElementById(legid[numleg[legin] - 1]);
					var img = legicon[numleg[legin] - 1];

					if (legin < numleg.length - 1) {
						legin = legin + 1;
					} else {
						legin = 0;
					}
					var imagin = new fabric.Image(img, {});

					if (par_h > par_w) {
						imagin.set({
							left: l * esprang
						});
						imagin.set({
							top: 15 + t * leges
						});
					} else {
						imagin.set({
							top: par_h * 0.05 + l * esprang
						});
						imagin.set({
							left: 15 + t * leges
						});

					}
					imagin.scale(echelle);
					tab.push(imagin);
				}
			}
		} else {
			//var img = document.getElementById(legid[0]);
			var img1 = legicon[0];

			var imagin1 = new fabric.Image(img1, {
				left: par_w / 3,
				top: par_h / 3,
				width: 70,
				height: 50

			});
			imagin1.scale(echelle);
			tab.push(imagin1);
		}

		var groupir = new fabric.Group(tab, {
			left: par_l,
			top: par_t,
			width: par_w,
			height: par_h,
			lockRotation: true,
			selectable: select
		});
		//groupir.set({ left: obj.left, top: obj.top });
		groupir.set('borderColor', 'red');
		groupir.set('cornerColor', 'red');
		groupir.set('cornerSize', 12);
		groupir.set('hoverCursor', 'pointer');
		//groupir.setShadow("10px 10px 5px rgba(94, 128, 191, 0.5)");
		//groupir.set('hoverCursor','all-scroll');

		canvas.add(groupir);
		canvas.remove(obj);
		canvas.renderAll();

		coord_parcelle = {
			"parcelle": par_nom,
			"type": "group",
			"left": par_l,
			"top": par_t,
			"width": par_w,
			"height": par_h
		};
		parid = [];
	}
	//////// fin de modifad///////////////

	////////// fonction arbre fruitiers 

	function triad(jardin, tree_l, tree_t, tree_nom, tree_scr, taille, tree_num, sel) {

		var parect = new fabric.Rect({
			left: 0,
			top: 0,
			width: 50,
			height: 70,
			padding: 0,
			centeredScaling: false

		});

		parect.set('fill', 'transparent');

		var partext = new fabric.Text(tree_num + "_" + tree_nom, {
			left: 0,
			top: 0,
			fontSize: 12,
			fontFamily: "Abel",
			fontWeight: 'bold',
			textAlign: "center",
			fill: 'blue'
		});

		//var img = document.getElementById(trid[tree_scr - 1]);
		var img = arbricon[tree_scr - 1];

		var imagin = new fabric.Image(img, {
			left: 10,
			top: 20,
		});

		imagin.scale(taille);

		var tree_tab = [parect, partext, imagin];

		var tree_group = new fabric.Group(tree_tab, {
			left: tree_l * caro,
			top: tree_t * caro,
			stroke: 'transparent',
			selectable: sel
		});
		//groupir.set({ left: tree_l, top: tree_t});

		//console.log("tree_tab :"+tree_tab);

		jardin.add(tree_group);

		jardin.renderAll();

	}

	/////////// allées
	function allee(jardin, datal, sel) {
		var colal = '#abf3b4';

		for (var i = 0; i < datal.length; i++) {
			var a = datal[i].a;
			var b = datal[i].b;
			var c = datal[i].c;
			var d = datal[i].d;
			//var colal=datal[i].col;

			jardin.add(new fabric.Line([a * caro, b * caro, c * caro, d * caro], {
				stroke: colal,
				strokeWidth: 20,
				fill: 'green',
				hasControls: false,
				selectable: sel
			}));
		}
	}

	/////////////fonctions grid

	function addgrid(jardin, w, h) {
		var grid = caro;
		var max = Math.max(w, h);

		for (var i = 0; i < (max / grid); i++) {
			jardin.add(new fabric.Line([i * grid, 0, i * grid, max], {
				stroke: '#999999',
				selectable: false,
				sendToBack: true
			}));

		}
		for (i = 0; i < (max / grid); i++) {
			jardin.add(new fabric.Line([0, i * grid, max, i * grid], {
				stroke: '#999999',
				selectable: false,
				sendToBack: true
			}));

		}

	}

	/////////////fonctions addnum

	function addnum(jardin, w, h) {
		var grid = caro;
		//  var w = w_cah;
		//  var h = h_cah;
		// var max=Math.max(w,h);

		for (var i = 0; i < (w / grid); i++) {

			jardin.add(new fabric.Text(i + 1 + "", {
				left: grid * (i + 0.8),
				top: 0,
				fontSize: 10,
				fill: 'blue',
				selectable: false
			}));

		}
		for ( i = 0; i < (h / grid); i++) {

			jardin.add(new fabric.Text((i + 1).toString(), {
				left: 5,
				top: grid * (i + 0.7),
				fontSize: 10,
				fill: 'blue',
				selectable: false
			}));

		}

	}

	///////////////creer le rectangle de la parcelle (bouton creer)
	function rectad(jardin) {

		// repositionne les coord de la souris
		jardin.calcOffset();

		jardin.isDrawingMode = false;
		//Declaring the variables
		var canDraw = true;
		var rec = true;
		var isMouseDown = false;
		var OriginX = [];
		var OriginY = [];
		var refRect;
		var ram1 = jardin._offset.left;
		var ram2 = jardin._offset.top;

		if (canDraw && ram1 > 10) {
			//Setting the mouse events

			jardin.on('mouse:down', function (event) {
				//Defining the procedure

				isMouseDown = true;
				OriginX = [];
				OriginY = [];

				//Getting the mouse Co-ordinates

				var posX = event.e.pageX;
				var posY = event.e.pageY;

				OriginX.push(posX - ram1);
				OriginY.push(posY - ram2);
				// console.log("originX :"+ OriginX);

				//Creating the rectangle object
				var rect = new fabric.Rect({
					left: OriginX[0],
					top: OriginY[0],
					strokeWidth: 2,
					borderColor: "red",
					fill: 'lightgreen'
				});

				jardin.add(rect);
				rect.lockRotation = true;
				refRect = rect;
				////Reference of rectangle object
				// console.log(rect);
			});
		} else {
			swal('Oops leftoffset =' + ram1);
			// return;
			//rectad();
		}

		jardin.on('mouse:move', function (event) {
			// Defining the procedure
			if (refRect) {
				if (canDraw) {
					//Getting the mouse Co-ordinates
					checkad = true;

					var posX = event.e.pageX - ram1;
					var posY = event.e.pageY - ram2;

					refRect.setWidth(Math.abs((posX - refRect.get('left'))));
					refRect.setHeight(Math.abs((posY - refRect.get('top'))));

					refRect.setCoords();
					// console.log(refRect);
					jardin.setActiveObject(refRect);
					refRect.active = true;
					jardin.renderAll();

				}
			}

		});

		jardin.on('mouse:up', function () {
			// jardin.calcOffset();
			canDraw = false;

			if (rec && refRect) {

				parnouv(jardin);
				console.log("parnouv actionné");
				rec = false;
			}
		});

	}

	//////////////////////////
	////////// rectriction aux limites des parcelles
	function limit(jardin) {

		jardin.on('object:moving', function (e) {
			var obj = e.target;
			// if object is too big ignore
			// console.log("objet move"+obj);
			//if(obj.currentHeight > obj.canvas.height || obj.currentWidth > obj.canvas.width
			//   ){return;}
			obj.setCoords();
			// top-left  corner
			if (obj.getBoundingRect().top < 0 || obj.getBoundingRect().left < 0) {
				obj.top = Math.max(obj.top, obj.top - obj.getBoundingRect().top);
				obj.left = Math.max(obj.left, obj.left - obj.getBoundingRect().left);
			}
			// bot-right corner
			if (obj.getBoundingRect().top + obj.getBoundingRect().height > obj.canvas.height || obj.getBoundingRect().left + obj.getBoundingRect().width > obj.canvas.width) {
				obj.top = Math.min(obj.top, obj.canvas.height - obj.getBoundingRect().height + obj.top - obj.getBoundingRect().top);
				obj.left = Math.min(obj.left, obj.canvas.width - obj.getBoundingRect().width + obj.left - obj.getBoundingRect().left);
			}
		});
	}

     ////////////////////////
     ////// fcts structures////////
     /////////////////////////OJO


     
   function recarbral(ob,jardin,esp,variete,size,plantan,comarb,jar){
          ///////// fichier arbres comme le fichier parcelles
           //allees= fijar[fijar.length - 1].all;
		   //arbres = fijar[fijar.length - 1].fruit;
            if(variete === "") {variete="x";}
            
               if(ob.radius)
              {
              var cor=ob.radius; 
               var num = Math.max.apply(Math,arbres.map(function(o){return o.num+1;}));
               if(num=="-Infinity"){num=1;}
              
             var left=Number((Math.abs((ob.left-cor)/caro)).toFixed(2));
             var top=Number((Math.abs((ob.top-cor)/caro)).toFixed(2));
           
       var nouvarb={"jardin":jar,"l":left,"nom":variete,"num":num,"plantation":plantan,"recolte":comarb,"scr":Number(esp),"t":top,"taille":Number(size)};     

          console.log("nouvarb :"+JSON.stringify(nouvarb));  

             arbres.push(nouvarb);
             //fijar[fijar.length - 1].fruit =arbres;
             
            socket.emit('modifijar'+numero, fijar);
			console.log("fijar nouvarbe envoyé à app.js");
   
             //console.log("fijar après ajout arbre :"+JSON.stringify(fijar[fijar.length - 1].fruit));
             
    triad(jardin, left,top, variete, esp, size, num,true);  
            jardin.remove(ob);    
              }else{
              
              if(ob.stroke=="transparent")
              {
		     var nomarb=ob._objects[1].text;  
             var num1 = nomarb.substr(0,1);
             var num2 = nomarb.substr(1,1);
             var num3 = nomarb.substr(2,1);
             if(num2 !="_"){num1 = num1+num2; if (num3 != "_") {num1=num1+num2+num3;}}
             
              console.log("num arbre :"+num1+','+num2+','+num3);
             console.log("ob arbre :"+JSON.stringify(ob));
             
             var ind;
           for (var i = 0; i < arbres.length; i++)
             {
			 if(Number(arbres[i].num) == Number(num1))
			 { ind=i;}	 
			 }
             console.log("ind arbre :"+ind);
             var charb=arbres[ind].num;
             
             console.log("charb:"+charb);

             var l=(ob.left/caro).toFixed(2);
             var t=(ob.top/caro).toFixed(2);
           
 
  var changarb={"jardin":jar,"l":Number(l),"nom":variete,"num":charb,"plantation":plantan,"recolte":comarb,"scr":Number(esp),"t":Number(t),"taille":Number(size)};     

                    arbres.splice( ind,1);
                    arbres.push(changarb);

       console.log("arbres après chgt :"+JSON.stringify(arbres));
       
            //fijar[fijar.length - 1].fruit =arbres;
           socket.emit('modifijar'+numero, fijar);
		console.log("fijar changarbre envoyé à app.js");
           
   triad(jardin, l, t, variete, esp, size, charb,true);  

            jardin.remove(ob);             
                               
              }else{
               
      console.log('line :'+JSON.stringify(ob));
     console.log("obfill :"+ob.fill);
      var a,b,c,d;
      if(ob.fill=='red')
      {
       
       a=Math.abs((ob.left-ob.width/2)/caro);
       b=Math.abs((ob.top-ob.height/2)/caro);
       c=Math.abs((ob.left+ob.width/2)/caro);
       d=Math.abs((ob.top+ob.height/2)/caro);
      
        var numal=allees.length+1;
       
      var nouvallee={"a":a,"b":b,"c":c,"col":"#abf3b4","d":d,"jardin":jar,"num":numal};       
      allees.push(nouvallee);
      
            socket.emit('modifijar'+numero, fijar);
			console.log("fijar allee envoyé à app.js");
        
     
          console.log("allées :"+allees);
     
      }else{
               
      a=Math.abs((ob.left)/caro);
       b=Math.abs((ob.top)/caro);
       c=Math.abs((ob.left+ob.width)/caro);
       d=Math.abs((ob.top+ob.height)/caro);    
       
      }    
      //console.log("a :"+a+"b :"+b+"c :"+c+"d :"+d); 
      var alad =[{"a":a,"b":b,"c":c,"d":d}];
      console.log("alad :"+JSON.stringify(alad));
      allee(jardin, alad, true);
        jardin.remove(ob);            
              }}            
             }
/////////////////////

    function delarbral(delob,jardin){

        //allees= fijar[fijar.length - 1].all;
		//arbres = fijar[fijar.length - 1].fruit;
		
            if(delob.radius)
              {
                jardin.remove(delob);
              }else{ 
                
              if(delob.stroke =="transparent")
              {  
             var nomarb=delob._objects[1].text;
            console.log("arbre a supprimer :"+nomarb); 
        for (var i = 0; i < arbres.length; i++)
             {
               var arb=arbres[i].num+"_"+arbres[i].nom;
                console.log("arb  :"+arb);
         if(arb==nomarb){ 
           arbres.splice( i,1);
            }}
            

           //fijar[fijar.length - 1].fruit =arbres;
            socket.emit('modifijar'+numero, fijar);
			console.log("fijar envoyé à app.js");
			
             //console.log(JSON.stringify(arbres));
            
              jardin.remove(delob); 
              
              }else{
               console.log("supression d'allée");
               var reperal = (delob.x1/caro);  
              // console.log("reperal :"+reperal);
              //  console.log(JSON.stringify(tablal));
             for (var q = 0; q < allees.length; q++)
             {
               var delal = allees[q].a;
              
         if(delal==reperal){ 
           allees.splice( q,1);
            }}  
               
             socket.emit('modifijar'+numero, fijar);
			 console.log("fijar envoyé à app.js");
                       
               jardin.remove(delob); 
               
              }}  
        }

/////////// dessin allées
					function linad(jardin) {
						   
					// repositionne les coord de la souris
					  jardin.calcOffset();
					  
						jardin.isDrawingMode = false;
						//Declaring the variables
						var line; 
						var canDraw=true;

			jardin.on('mouse:down', function(o){
			  if(canDraw){
			  var pointer = jardin.getPointer(o.e);
			  var points = [ pointer.x, pointer.y, pointer.x, pointer.y ];
			  line = new fabric.Line(points, {
				strokeWidth: 5,
				fill: 'red',
				stroke: 'red',
				originX: 'center',
				originY: 'center',
				selectable:true,
				hasRotatingPoint:false
			  });
			  jardin.add(line);
			  }
			});

			jardin.on('mouse:move', function(o){
			  if (canDraw && line){
			  var pointer = jardin.getPointer(o.e);
			  line.set({ x2: pointer.x, y2: pointer.y });
			  jardin.forEachObject(function(o){ o.setCoords();});
			  jardin.renderAll();
			  }
			});

			jardin.on('mouse:up', function(o){ 
			  canDraw=false;
					});
			}
///////////// dessin arbre

		function circad(jardin){ 
		var circle,  origX, origY;
		var canDraw=true;
		var move=false;

		jardin.on('mouse:down', function(o){
		  if(canDraw)
		  {
		  var pointer = jardin.getPointer(o.e);
		  origX = pointer.x;
		  origY = pointer.y;
		  circle = new fabric.Circle({
			left: pointer.x,
			top: pointer.y,
			radius: 40,
			strokeWidth: 1,
			fill: 'transparent',
			stroke: 'blue',
			selectable: true,
			hasControls: false,
			originX: 'center', originY: 'center'
		  });
		 jardin.add(circle);
		 //jardin.deactivateAll().renderAll();
		  }
		});

		jardin.on('mouse:up', function(o){
		 
		 canDraw= false;
		 move=false;
		});
		}
	//////////////////// fin structures
	 //************************Remove Grid***************
        $("#ungrid1").click(function () {
            ungrid(can1.a);
            delem(can1.a, 'text');

        });

        $("#ungrid2").click(function () {
            ungrid(can2.a);
            delem(can2.a, 'text');
        });

        $("#ungrid3").click(function () {
            ungrid(can3.a);
            delem(can3.a, 'text');
        });

 //////////// delem oter element par son type
        function delem(jardin, typelem) {
            var canObject =[];
            canObject = jardin.getObjects();

            while (1) {
                for (var tempObjNumber = 0; tempObjNumber < canObject.length; tempObjNumber++) {
                    if (jardin.item(tempObjNumber).type == typelem) {

                        jardin.item(tempObjNumber).remove();
                        jardin.renderAll();
                    }
                }
                jardin.renderAll();
                canObject = jardin.getObjects();
                var textStatus = false;
                for (tempObjNumber = 0; tempObjNumber < canObject.length; tempObjNumber++) {
                    if (jardin.item(tempObjNumber).type == typelem) {
                        textStatus = true;
                    }
                }
                if (textStatus) {
                    canObject = jardin.getObjects();
                    continue;
                } else {
                    break;
                }
            }

        }


        /////////////oter la grille sans les allées
 
        function ungrid(jardin) {
            var canObject = [];
            canObject = jardin.getObjects();

            while (1) {
                for (var tempObjNumber = 0; tempObjNumber < canObject.length; tempObjNumber++) {
                    if (jardin.item(tempObjNumber).type == 'line' && jardin.item(tempObjNumber).stroke == '#999999') {

                        jardin.item(tempObjNumber).remove();
                        jardin.renderAll();
                    }
                }
                jardin.renderAll();
                canObject = jardin.getObjects();
                var lineStatus = false;
                for (tempObjNumber = 0; tempObjNumber < canObject.length; tempObjNumber++) {
                    if (jardin.item(tempObjNumber).type == 'line' && jardin.item(tempObjNumber).stroke == '#999999') {
                        lineStatus = true;
                    }
                }
                if (lineStatus) {
                    canObject = jardin.getObjects();
                    continue;
                } else {
                    break;
                }
            }

        }
        /////////// choix couleur du fond pour tous les jardins
    
       var couleur = document.getElementById('col');
        $("#gocol").click(function () {
            can1.a.backgroundColor = couleur.value;
            can1.a.renderAll();
            can1.b.backgroundColor = couleur.value;
            can1.b.renderAll();
            can2.a.backgroundColor = couleur.value;
            can2.a.renderAll();
            can2.b.backgroundColor = couleur.value;
            can2.b.renderAll();
            can3.a.backgroundColor = couleur.value;
            can3.a.renderAll();
            can3.b.backgroundColor = couleur.value;
            can3.b.renderAll();
        });


        ///////////////////image jpeg
        document.getElementById("png_1").onclick = function () {
			can1.a.backgroundColor = '#F6F6CD';
            can1.a.renderAll();
			var pic1 =can1.a.toDataURL({format: 'jpeg', quality: 0.25 });
            window.open(pic1, "");
        };


        document.getElementById("png_2").onclick = function () {
            can2.a.backgroundColor = '#F6F6CD';
            can2.a.renderAll();
			var pic2 =can2.a.toDataURL({format: 'jpeg', quality: 0.25 });
            window.open(pic2, "");
        };

        document.getElementById("png_3").onclick = function () {
           can3.a.backgroundColor = '#F6F6CD';
            can3.a.renderAll();
			var pic3 =can3.a.toDataURL({format: 'jpeg', quality: 0.25 });
            window.open(pic3, "");
        };

        ////


	////////// fin 

});
