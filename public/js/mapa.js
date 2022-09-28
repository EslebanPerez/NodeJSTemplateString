/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mapa.js":
/*!************************!*\
  !*** ./src/js/mapa.js ***!
  \************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n(function() {\r\n    const lat = 20.67444163271174;\r\n    const lng = -103.38739216304566;\r\n    const mapa = L.map('mapa').setView([lat, lng ], 16);\r\n    let marker;\r\n\r\n    // Utilizar Provider y Geocoder\r\n    const geocoderService = L.esri.Geocoding.geocodeService()\r\n\r\n    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {\r\n        attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors'\r\n    }).addTo(mapa);\r\n\r\n    //Pin\r\n    marker = new L.marker([lat, lng],{\r\n        draggable: true,\r\n        autoPan: true\r\n    })\r\n    .addTo(mapa);\r\n\r\n    // Detectar movimiento de Pin\r\n    marker.on('moveend', function(e){\r\n        marker = e.target\r\n        const position = marker.getLatLng()\r\n        console.log(position);\r\n        mapa.panTo(new L.LatLng(position.lat, position.lng))\r\n\r\n        // Obtener información de las calles\r\n        geocoderService.reverse().latlng(position, 13).run(function(error, resultado){\r\n            console.log(resultado);\r\n            marker.bindPopup(resultado.address.LongLabel);\r\n\r\n            // Llenar los campos\r\n            document.querySelector('.calle').textContent = resultado?.address?.Address ??  '';\r\n            document.querySelector('#calle').value = resultado?.address?.Address ??  '';\r\n            document.querySelector('#lat').value = resultado?.latlng?.lat ??  '';\r\n            document.querySelector('#lng').value = resultado?.latlng?.lng ??  '';\r\n        })\r\n    })\r\n\r\n\r\n})()\n\n//# sourceURL=webpack://bienes-raices/./src/js/mapa.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/js/mapa.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;