define("DS/ENOExportV5WebCommands/ENOExportV5WebCommands_en",{});define("DS/ENOExportV5WebCommands/assets/nls/ExportV5Cmd",{title:"Export V5",init:"initialized ! ",loading:"Loading the objects to export",option_path:{label:"Export to directory",option_text:"Enter a path here",option_combo:"Select a location ...",button_add:"Add",predefined_paths:"Predefined paths",added_path:"Local definition"},option_conflict:{option_overwrite:"Overwrite",option_copy:"Keep a copy of the existing file in case of conflict in the disk"},generatingfilename:"Generating file names...",buttonLaunch:"Launch",buttonExport:"Export",buttonCancel:"Cancel",error:{title:"Error",noSelection:"Select the objects to export, and then click the Export V5 command.",empty:{title:"Unable to export the selected objects.",subtitle:"The defined business rule generated an empty file name. Contact your administrator for support."},unicity:{BL:{title:"Unable to export the selected objects.",subtitle:"The defined business rule did not generate unique file names. Contact your administrator for support."},noBL:{title:"Unable to export the selected objects.",subtitle:"The generated file names based on titles did not generate unique file names. Contact your administrator to define a naming rule."}},expand_empty:"There is no content to export.",expand_failed:{title:"Unable to export the selected objects.",subtitle:"Refresh the widget and try again."},type:"You cannot export this type of object: {objType}.",CADMaster:"You cannot export objects with {cadmaster} CAD Format.",launchApp:"Unable to launch the batch file.",errorType:{title:"An unexpected error occurred.",subtitle:"Contact your administrator for support.",message:"Error id : {errorID}"},fetchFailed:{title:"Unable to retrieve information",subtitle:"Verify that you are using the correct credentials, or contact your administrator for support."},emptyDefinedPath:{title:"The list of authorized paths is empty.",subtitle:"Contact your administrator for support. "},pathInvalid:{title:"The path defined by {namesList} is invalid.",subtitle:"Contact your administrator for support"},emptyPathIdentifier:{title:" The defined paths do not have a name.",subtitle:"Contact your administrator for support."},identifierUnicity:{title:"The following path names are not unique: {namesList}",subtitle:"Contact your administrator for support."},emptyobject:"Wrong syntax for the declaration of the path. Please contact your administrator",timeout:"The request has timedout after {seconds}ms.",security_context_fail:"Server request cannot be sent : failed retrieving security context.",expandIssue:"Some data may not be indexed yet. Please wait a few minutes before making a new tentative attempt.",code401:"Error 401 : authentication issue",code400:"Error 400 : Bad request",genericError:"Error processing request",groupnotexpanded:"A collapsed or partially loaded group may provide an incomplete result. Please expand the group completely, to perform the export better."},warning:{title:"Warning",title_path:"Invalid path.",empty_path:"Cannot export to an empty location",invalid_select:"Some of the selected files are not supported",invalid_path:"the selected path is invalid. Please correct or enter a new one.",invalid_fetchanswer:"Some of the newly created objects hasn't been indexed yet and may not be exported."},info:{title:"Information",message:"Successfully sent the message."},success:{title:"Success",message:"The data has been sent to CATIA V5 for export."},processing:"Generating filenames",launch_batch:"Launching the batch...","ExportV5.Msg.InvalidInput":"Export to CATIA V5 of one or more selected data is not supported.","ExportV5.Msg.ExecutionFailed":"Unexpected error occurred.","ExportV5.Msg.ExecutionFailed.Subtitle":"Contact your administrator for support.","ExportV5.Msg.InvalidRole":"You do not have the role to use Export to CATIA V5","ExportV5.Msg.InvalidInputCADMaster":"One or more selected data has unsupported CAD Format. Export to CATIA V5 is not supported.","ExportV5.Msg.ExpandResultEmpty":"Expand result of selected data is empty. Export to CATIA V5 is not possible."});