const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyBET4I7QZvROA5RAhBFfEongNZzhQ4zflE",
  authDomain: "udg-coderhouse.firebaseapp.com",
  projectId: "udg-coderhouse",
  storageBucket: "udg-coderhouse.appspot.com",
  messagingSenderId: "630521099899",
  appId: "1:630521099899:web:e9d7771a3a86c80c4214de",
});

const db = firebase.firestore();
var  menu =[  
    {  
       "id": "P-amd-1",
       "name":"Procesador AMD RYZEN 3 3200G 4.0GHz Turbo + Radeon Vega 8 AM4 Wraith Stealth Cooler",
       "price": 12980,
       "stock": 25,
       "category": "Procesadores-amd",
       "image": "https://www.tiendanova.com.ar/SITES/IMG/pais-gamer-08-2020/01-10-2020-10-10-44-compragamer_imganen_general_16752_procesador_amd_ryzen_3_3200g_4.0ghz_turbo___radeon_vega_8_am4_wraith_stealth_cooler_f414a507-grn.jpg"
    },
    {  
        "id": "P-amd-2",
        "name":"Procesador AMD RYZEN 3 2200G 3.7GHz + Radeon Vega 8 AM4 Wraith Stealth Cooler",
        "price": 10790,
        "stock": 7,
        "category": "Procesadores-amd",
        "image": "https://images-na.ssl-images-amazon.com/images/I/51GIQoiU68L._AC_SY450_.jpg"
     },
     {  
        "id": "P-amd-3",
        "name":"Procesador AMD RYZEN 5 2400G 3.9GHz + Radeon Vega 11 AM4 Wraith Stealth Cooler",
        "price": 15850,
        "stock": 5,
        "category": "Procesadores-amd",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_8518_Procesador_AMD_RYZEN_5_2400G_3.9GHz___Radeon_Vega_11_AM4_Wraith_Stealth_Cooler_01127018-grn.jpg"
     },
     {  
        "id": "P-amd-4",
        "name":"Procesador AMD RYZEN 5 1600 3.2Ghz AM4 Wraith Spire Cooler",
        "price": 16310,
        "stock": 2,
        "category": "Procesadores-amd",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12136_Procesador_AMD_RYZEN_5_1600_3.2Ghz_AM4_Wraith_Spire_Cooler__39600fb5-grn.jpg"
     },
     {  
        "id": "P-amd-5",
        "name":"Procesador AMD RYZEN 7 2700 4.1GHz Pinnacle AM4 Wraith Spire RGB Led Cooler ",
        "price": 25290,
        "stock": 10,
        "category": "Procesadores-amd",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_11971_Procesador_AMD_RYZEN_7_2700_4.1GHz_Pinnacle_AM4_Wraith_Spire_RGB_Led_Cooler_2f783537-grn.jpg"
     },
     {  
        "id": "P-amd-6",
        "name":"Procesador AMD Ryzen 5 PRO 4650G 4.2GHz Turbo + Wraith Stealth Cooler OEM",
        "price": 46500,
        "stock": 17,
        "category": "Procesadores-amd",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21462_Procesador_AMD_Ryzen_5_PRO_4650G_4.2GHz_Turbo___Wraith_Stealth_Cooler_OEM_52f8e46a-grn.jpg"
     },
     {  
        "id": "P-amd-7",
        "name":"Procesador AMD RYZEN 7 3700X 4.4 GHz AM4 Wraith Prism RGB Led Cooler",
        "price": 45520,
        "stock": 11,
        "category": "Procesadores-amd",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14083_Procesador_AMD_RYZEN_7_3700X_4.4_GHz_AM4_Wraith_Prism_RGB_Led_Cooler_4e00eaaf-grn.jpg"
     },
     {  
        "id": "P-amd-8",
        "name":"Procesador AMD RYZEN 9 3900X 4.6Ghz AM4 Wraith Prism RGB Led Cooler ",
        "price": 68850,
        "stock": 54,
        "category": "Procesadores-amd",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_14091_Procesador_AMD_RYZEN_9_3900X_4.6Ghz_AM4_Wraith_Prism_RGB_Led_Cooler_06f74e3e-grn.jpg"
     },
     {  
        "id": "P-int-1",
        "name":"Procesador Intel Core i7 9700KF 4.9GHz Turbo 1151 Coffee Lake  ",
        "price": 34950,
        "stock": 27,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13675_Procesador_Intel_Core_i7_9700KF_4.9GHz_Turbo_1151_Coffee_Lake_8ad5e519-grn.jpg"
     },
     {  
        "id": "P-int-2",
        "name":"Procesador Intel Celeron G4930 3.2GHz 1151 9th Gen ",
        "price": 16800,
        "stock": 15,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_17413_Procesador_Intel_Celeron_G4930_3.2GHz_1151_9th_Gen_ef7c397f-grn.jpg"
     },
     {  
        "id": "P-int-3",
        "name":"Procesador Intel Core i7 10700K 5.1GHz Turbo 1200 Comet Lake ",
        "price": 46230,
        "stock": 21,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18879_Procesador_Intel_Core_i7_10700K_5.1GHz_Turbo_1200_Comet_Lake_c3f07566-grn.jpg"
     },
     {  
        "id": "P-int-4",
        "name":"Procesador Intel Core i7 9700F 4.7GHz Turbo 1151 Coffee Lake  ",
        "price": 36650,
        "stock": 9,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_16200_Procesador_Intel_Core_i7_9700F_4.7GHz_Turbo_1151_Coffee_Lake_40da7c9b-grn.jpg"
     },
     {  
        "id": "P-int-5",
        "name":"Procesador Intel Core i5 10400F 4.3GHz Turbo 1200 Comet Lake",
        "price": 20900,
        "stock": 7,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_18900_Procesador_Intel_Core_i5_10400F_4.3GHz_Turbo_1200_Comet_Lake_e07a1d28-grn.jpg"
     },
     {  
        "id": "P-int-6",
        "name":"Procesador Intel Core i7 10700 4.8GHz Turbo Socket 1200 Comet Lake",
        "price": 44400,
        "stock": 18,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19228_Procesador_Intel_Core_i7_10700_4.8GHz_Turbo_Socket_1200_Comet_Lake_e3d7d847-grn.jpg"
     },
     {  
        "id": "P-int-7",
        "name":"Procesador Intel Core i5 10400 4.3GHz Turbo 1200 Comet Lake",
        "price": 21610,
        "stock": 10,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19422_Procesador_Intel_Core_i5_10400_4.3GHz_Turbo_1200_Comet_Lake_7f69efff-grn.jpg"
     },
     {  
        "id": "P-int-8",
        "name":"Procesador Intel Core i9 10900KF 5.3GHz Turbo",
        "price": 64800,
        "stock": 23,
        "category": "Procesadores-intel",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20057_Procesador_Intel_Core_i9_10900KF_5.3GHz_Turbo_54113e38-grn.jpg"
     },
     {  
        "id": "A-1",
        "name":"Gabinete Kolink Void ARGB ATX Vidrio Templado",
        "price": 6450,
        "stock": 22,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_20250_Gabinete_Kolink_Void_ARGB_ATX_Vidrio_Templado_f962dc11-grn.jpg"
     },
     {  
        "id": "A-2",
        "name":"Gabinete Kolink Observatory Lite Mesh 4x120mm Coolers ARGB Vidrio Templado",
        "price": 9250,
        "stock": 16,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_21967_Gabinete_Kolink_Observatory_Lite_Mesh_4x120mm_Coolers_ARGB_Vidrio_Templado_7fabaefd-grn.jpg"
     },
     {  
        "id": "A-3",
        "name":"Gabinete ASUS TUF GT501 Vidrio Templado Black 3 x Coolers RGB Aura Sync ",
        "price": 21500,
        "stock": 6,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22711_Gabinete_ASUS_TUF_GT501_Vidrio_Templado_Black_3_x_Coolers_RGB_Aura_Sync_7a5d6e02-grn.jpg"
     },
     {  
        "id": "A-4",
        "name":"Gabinete Kolink Citadel Mesh RGB 3xCoolers ARGB Vidrio Templado",
        "price": 9600,
        "stock": 26,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_22997_Gabinete_Kolink_Citadel_Mesh_RGB_3xCoolers_ARGB_Vidrio_Templado_2031d0bd-grn.jpg"
     },
     {  
        "id": "A-5",
        "name":"Gabinete Be Quiet! PURE BASE 500DX White",
        "price": 11940,
        "stock": 20,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_23083_Gabinete_Be_Quiet__PURE_BASE_500DX_White_b33adc73-grn.jpg"
     },
     {  
        "id": "A-6",
        "name":"Gabinete Corsair Carbide Spec Omega RGB Black Vidrio Templado",
        "price": 15790,
        "stock": 19,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_12594_Gabinete_Corsair_Carbide_Spec_Omega_RGB_Black_Vidrio_Templado_4e658326-grn.jpg"
     },
     {  
        "id": "A-7",
        "name":"Gabinete Cooler Master Masterbox MB530P ARGB 3xVidrios Templados 3x120mm ARGB Fans atx",
        "price": 29730,
        "stock": 5,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_13197_Gabinete_Cooler_Master_Masterbox_MB530P_ARGB_3xVidrios_Templados_3x120mm_ARGB_Fans_atx_98a2ce35-grn.jpg"
     },
     {  
        "id": "A-8",
        "name":"Gabinete Deepcool MATREXX 55 MESH ADD-RGB 4F",
        "price": 10420,
        "stock": 10,
        "category": "Accesorios",
        "image": "https://compragamer.net/pga/imagenes_publicadas/compragamer_Imganen_general_19528_Gabinete_Deepcool_MATREXX_55_MESH_ADD-RGB_4F_e2000e72-grn.jpg"
     }
 ]
  

 menu.forEach(function(obj) {
    db.collection("menu").add({
        id: obj.id,
        name: obj.name,
        price: obj.price,
        stock: obj.stock,
        category: obj.category,
        image: obj.image
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});