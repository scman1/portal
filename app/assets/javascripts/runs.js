// Copyright (c) 2012-2013 Cardiff University, UK.
// Copyright (c) 2012-2013 The University of Manchester, UK.
//
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are met:
// 
// * Redistributions of source code must retain the above copyright notice,
//   this list of conditions and the following disclaimer.
// 
// * Redistributions in binary form must reproduce the above copyright notice,
//   this list of conditions and the following disclaimer in the documentation
//   and/or other materials provided with the distribution.
// 
// * Neither the names of The University of Manchester nor Cardiff University nor
//   the names of its contributors may be used to endorse or promote products
//   derived from this software without specific prior written permission.
// 
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
// IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
// ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE
// LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
// CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
// SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
// INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
// CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
// ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
// POSSIBILITY OF SUCH DAMAGE.
// 
// Authors
//     Abraham Nieva de la Hidalga
// 
// Synopsis 
// 
// BioVeL Taverna Lite  is a prototype interface to Taverna Server which is 
// provided to support easy inspection and execution of workflows.
// 
// For more details see http://www.biovel.eu
// 
// BioVeL is funded by the European Commission 7th Framework Programme (FP7),
// through the grant agreement number 283359. 
function uploadFile(fileList, targetName) {
    if (fileList == null) { return; }
    var file = fileList[0];
    var reader = new FileReader();
    reader.onload = function(evt) {
      document.getElementById(targetName).value = evt.target.result;
    };
    reader.readAsText(file);
  }

(function() {
  jQuery(function() {
    return $('#runs_table').dataTable({
      //sPaginationType: "full_numbers",
      "iDisplayLength": 25,
      "oLanguage": {
         "sSearch": "Filter Runs:"
      },   
      "bRetrieve": true,
      "bJQueryUI": true,
      "aoColumnDefs": [
        { "bSortable": false, "aTargets": [ -1 ] }
    ]
    });
  });
}).call(this);


     
