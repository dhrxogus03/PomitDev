define("DS/ENOCharacteristicsApp/ENOCharacteristicsApp_en",{});define("DS/ENOCharacteristicsApp/assets/nls/ENOCharacteristicsApp",{label_Details:"Details",label_Type:"Type",label_PerformanceSpec:"Performance Specifications",label_Owner:"Owner",label_CreationDate:"Creation Date",label_LastModified:"Modification Date",label_Description:"Description",label_AcceptanceLimits:"Acceptance Criteria",label_CharAcceptanceLimits:"Acceptance Limit",label_Category:"Category",label_SequenceOrder:"Sequence Order",label_Title:"Title",label_Revision:"Revision",label_Maturity:"Maturity State",label_Dimension:"Dimension",label_LowerLimit:"Lower",label_LowerLimits:"Lower Limits",label_Specification:"Specification",label_SpecificationLimit:"Specification Limits",label_CharSpecificationLimit:"Specification Limit",label_CharRoutineReleaseLimit:"Routine Release Limit",label_RoutineRelease:"Routine Release",label_RoutineReleaseLimit:"Routine Release Limits",label_Target:"Target",label_Inclusive:"Inclusive",label_UpperLimit:"Upper",label_UpperLimits:"Upper Limits",label_AllowedValues:"Allowed Values",label_ComparedToStandard:"Compared To Standard",label_DisplayUnit:"Display Unit",label_UOM:"UOM",label_UnitOfMeasure:"Unit of Measure",label_Precision:"Precision",label_Priority:"Priority",label_TestMethod:"Test Methods",label_ExternalTestMethod:"External Test Methods",label_TestingInstructions:"Testing Instructions",label_CharacteristicsNotes:"Notes",label_MissedTargetAction:"Missed Target Action",label_AppliesTo:"Applies to",label_Bulk:"Bulk",label_InProcess:"In Process",label_FinalPackage:"Final Package",label_Color:"Color - ",label_DeleteCharacteristics:"Delete",label_ExportCharacteristics:"Export",label_Information:"View Information",label_RelatedObjects:"Relations",label_VersionExplorer:"Revisions",label_View:"View",label_Wrap:"Wrap",label_UnWrap:"Unwrap",label_NoActionRequired:"No Action Required",label_HoldandRetest:"Hold and Retest",label_ShipandMonitor:"Ship and Monitor",DeleteStatus:"Delete Status",label_Status:"Status",label_True:"True",label_False:"False",label_Button_Apply:"Apply",label_Button_Cancel:"Cancel",label_Button_Close:"Close",label_Button_Ok:"OK",label_NewCharacteristics:"New Performance Characteristic",label_Characteristics:"Characteristics",label_None:"None",label_Add:"Add",label_ColumnActions:"Actions",Message_Success:"Success",Message_Error:"Error",Message_Error_DeleteCharError:"Characteristics cannot be deleted.",Message_Error_RemoveTestMethod:"Test methods cannot be removed. Verify that you have sufficient access rights or if any change action is associated.",Message_Error_AddTestMethod:"Test methods cannot be added. Verify that you have sufficient access rights or if any change action is associated.",Message_DeleteCharacteristic:'Do you want to permanently delete "{title}"?',Message_DeleteCharacteristics:"Do you want to permanently delete the selected objects?",Message_DeleteSpecification:'Do you want to permanently delete "{title}" and its Characteristics?',Message_Error_DeleteCharAccess:"An error occurred while deleting the performance characteristic. Verify that you have sufficient access rights or if any change action is associated.",Message_Error_DeleteSpecAccess:"An error occurred while deleting the performance specification. Verify that you have sufficient access rights or if any change action is associated.",Message_Error_DeleteCharOnReleaseItem:"Released Items cannot be deleted.",Message_PleaseSelectADimension:"Select a dimension",Message_DuplicateValue:"Duplicates are not allowed",Message_EmptyAllowedValue:"Specify allowed values.",Message_ValidateLimitsFields:"Verify limit and target values follow the expression requirements: \n Lower Specification Limit <= Lower Routine Release Limit <= Lower Acceptance Limit <= Target Acceptance Limit  <= Upper Acceptance Limit <= Upper Routine Release Limit <= Upper Specification Limit",Message_ErrorFetchAllDimension:"An error occurred while loading dimensions and display units. Refresh the page.",Message_ErrorLoadCharacteristics:"An error occurred while loading characteristics. Refresh the page.",Message_Error_CreateCharAccess:"An error occurred while creating the characteristic. Verify that you have sufficient access rights or if any change action is associated.",Message_Error_CreateSpecAccess:"An error occurred while creating the performance specification. Verify that you have sufficient access rights or if any change action is associated.",Message_NumericalValueCheck:"{ColumnName} {GroupHeaderName} must be Number.",Message_IntegerValueCheck:"{ColumnName} {GroupHeaderName} must be Integer.",Message_HexaValueCheck:"For HEXA, enter values [#000000-#FFFFFF] in the format #000000",Message_CMYKValueCheck:"For CMYK, enter values [0-1] in the format [0,0,0,0]",Message_RGBValueCheck:"For RGB, enter values [0-255] in the format [0,0,0]",Message_PositiveIntegerCheck:"{ColumnName} {GroupHeaderName} must be an integer greater than or equal to 0",Message_PositiveIntegerPriority:"Priority must be an integer greater than or equal to 0",Message_BadAllowedValueSize:"For Subjectivity Characteristic, size of allowed values should be 3, 5 or 7...",Message_SubjectivityEmptyError:"Specify target, allowed values and compared to standard",Message_SubTargetNotIncl_Allowed_Error:"Target should include one of the allowed values",Message_TargetLowerUpperInclusive:"Activate inclusive option when lower or upper values are equal to the target.",Message_AcceptanceLimitEmptyCheck:"Specify values in  Lower/Upper acceptance limit when Lower/Upper acceptance limit Inclusive is enabled.",Message_LowerUpper_TargetEmpty:"Activate inclusive option when lower and upper values are equal.",Message_StringValueNotAllowed:"Enter Numeric Values",Message_TestMethodButton:"Click here for more information",AddTestMethod:"Add Test Methods",RemoveTestMethod:"Detach Test Methods",Create:"Create",CreateandClose:"Create and Close",Loading:"Loading...",DeletingProgess:"Deleting...",WrapLoader:"Wraping...",UnwrapLoader:"Unwraping...",MandatoryFieldIndicator:"Indicates required fields",RequiredFields:"Specify values in all mandatory fields: ",NoResults:"No Results",label_YES:"Yes",label_NO:"No",ResetChanges:"Reset changes",UpdatingLoader:"Updating...",Notify_UpdatedGroupcolumn:"Updated {ColumnName} {GroupHeaderName}",Notify_UpdatedColumn:"Updated {ColumnName}",Notify_Updated:"Updated ",Perf_Spec_Updated:"Performance Specification was updated",Perf_Char_Updated:"Performance Characteristic was updated",Failure_Update:"Failed to update.{errorMsg}",CharacteristicCreateSuccess:"The performance characteristic was created.",CharacteristicCreateFailure:"An error occurred while creating the characteristic.",SpecificationCreateFailure:"An error occurred while creating the specification.",CreatingCharacteristic:'Creating "{title}"',PersonalizeView:"Custom Views",placeHolder_Category:"Enter a category",placeHolder_Type:"Select a Type",placeHolder_Title:"Enter a title",placeHolder_Description:"Enter a description",placeHolder_Notes:"Enter the notes",placeHolder_ChooseDimension:"Choose a dimension",placeHolder_SelectDimension:"Select a dimension",placeHolder_Search:"Search",placeHolder_Search_testMethods:"Search test methods",placeHolder_Search_dimension:"Search dimension",placeHolder_DisplayUnit:"Select a display unit",placeHolder_AltDisplayUnit:"Enter a display unit",placeHolder_AddAllowedValues:"Add value",placeHolder_AllowedValues:"Number of Allowed Values should be 3, 5, 7...",placeHolder_AllowedValuesList:"List of allowed Values",placeHolder_ComparedToStandard:"Enter a value to compare to standard values",placeHolder_Priority:"Enter an integer greater than or equal to 0",placeHolder_TestMethod:"Select test methods",placeHolder_ExternalTestMethod:"Enter the External Test Method",placeHolder_LowerTarget:"Enter the lower target",placeHolder_IncludedLowerTarget:"Lower Inclusive",placeHolder_Target:"Enter the target",placeHolder_UpperTarget:"Enter the upper target",placeHolder_IncludedUpperTarget:"Upper Inclusive",placeHolder_Precision:"Select a precision",placeHolder_LowerRoutineReleaseLimit:"Enter the lower routine release limit",placeHolder_UpperRoutineReleaseLimit:"Enter the upper routine release limit",placeHolder_LowerSpecificationLimit:"Enter the lower specification limit",placeHolder_UpperSpecificationLimit:"Enter the upper specification limit",placeHolder_CharacteristicsNotes:"Enter the notes",placeHolder_MissedTargetAction:"Select the missed target action",placeHolder_Values:"Enter values",placeHolder_Numeric:"Enter a number",placeHolder_Integer:"Enter an integer",placeholder_Real_Numeric:"Enter a numeric value",placeHolder_CMYK:"Enter values [0-1] in the format [0,0,0,0], Ex- [0.1,0,0.2,0.4]",placeHolder_HEXA:"Enter values [#000000 - #FFFFFF] in the format #000000, Ex- #FFFF00",placeHolder_RGB:"Enter values [0-255] in the format [0,0,0], Ex- [125,250,110]",label_Notes:"Notes",SpecificationCreateSuccess:"The performance specification was created.",label_Performance_Specifications:"New Performance Specification",label_viewLatestReleased:"Latest Released",label_viewLatestRevised:"Latest Revision",label_viewAll:"All",text_PerfSpec_shortHelpLatestReleased:"Displays the latest released revision of Performance Specifications.",text_PerfSpec_shortHelpLatestRevised:"Displays the latest revision of Performance Specifications irrespective of their status.",text_PerfSpec_shortHelpAll:"Displays all revisions of Performance Specifications.",Error_Get_TM:"Unable to load Test Methods. Please contact Admin",label_Detach:"Detach",Message_RemoveItem:'Are you sure you want to detach "{title}"?',Message_RemoveItems:"Are you sure you want to detach the selected objects?",label_Name:"Name",label_Is_Last_Revision:"Is Last Revision",HigherRevExist:"A higher revision of the object exists.",label_OtherDimension:"Other Dimension",minUpdatedWithTarget:"Lower acceptance limit updated with target value as it cannot be blank when when lower inclusive is activated.",maxUpdatedWithTarget:"Upper acceptance limit updated with target value as it cannot be blank when when upper inclusive is activated.",minUpdatedWithMax:"Lower acceptance limit updated with upper acceptance limit value as it cannot be blank when when lower inclusive is activated.",maxUpdatedWithMin:"Upper acceptance limit updated with lower acceptance limit value as it cannot be blank when when upper inclusive is activated.",updateMax:"Update the upper acceptance limit.",updateMin:"Update the lower acceptance limit.",updateLowerRoutine:"Update the lower routine limit.",updateUpperRoutine:"Update the upper routine limit.",updateLowerSpecification:"Update the lower specification limit.",updateUpperSpecification:"Update the upper specification limit.",LowerIncCannotDeactivate:"Lower inclusive cannot be de-activated as lower acceptance limit is equal to target or upper acceptance limit.",UpperIncCannotDeactivate:"Upper inclusive cannot be de-activated as upper acceptance limit is equal to target or lower acceptance limit.",LowerRoutineIncCannotDeactivate:"Lower inclusive cannot be de-activated as lower routine limit is equal to target or upper routine limit.",UpperRoutineIncCannotDeactivate:"Upper inclusive cannot be de-activated as upper routine limit is equal to target or lower routine limit.",LowerSpecificationIncCannotDeactivate:"Lower inclusive cannot be de-activated as lower specification limit is equal to target or upper specification limit.",UpperSpecificationIncCannotDeactivate:"Upper inclusive cannot be de-activated as upper specification limit is equal to target or lower specification limit.",Err_Priority:"Enter an integer greater than or equal to 0.",Err_Deactivate_LowerInc:"De-activate lower Inclusive.",Err_Deactivate_UpperInc:"De-activate upper Inclusive.",Err_MultiTypeSelect:"Select same type of objects to delete.",Err_DifferentParentTypes:"Select items from a single parent.",MSG_OperationSucessful:"Success.",ErrRealAndNumeric:"Please enter a numeric value.",lowerIncCheck:"Activate lower inclusive if lower acceptance limit is equal to the target.",upperIncCheck:"Activate upper inclusive if upper acceptance limit is equal to the target.",activateInc:"Activate inclusive option if lower and upper values are equal.",targetGreaterThanLower:"Target should be greater than or equal to lower acceptance limit.",targetLesseThanUpper:"Target should be lesser than or equal to upper acceptance limit.",tarLessThanURRL:"Target should be lesser than or equal to upper routine release limit.",tarGreaterThanLRRL:"Target should be greater than or equal to Lower routine release limit.",tarLessThanLSL:"Target should be lesser than or equal to upper specification limit.",tarGreaterThanUSL:"Target should be greater than or equal to lower specification limit.",LALLessThanUAL:"Lower acceptance limit should be lesser than or equal to upper acceptance limit.",URRLGreaterThanUAL:"Upper routine release limit should be greater than or equal to upper acceptance limit.",LRRLLessThanLAL:"Lower routine release limit should be lesser than or equal to lower acceptance limit.",URRLGreatorThanLAL:"Upper routine release limit should be greater than or equal to lower acceptance limit.",LRRLLessThanUAL:"Lower routine release limit should be lesser than or equal to upper acceptance limit.",LRRLLessThanURRL:"Lower routine release limit should be lesser than or equal to upper routine release limit.",USLGreaterThanURRL:"Upper specification limit should be greater than or equal to upper routine release limit.",USLGreaterThanUAL:"Upper specification limit should be greater than or equal to upper acceptance limit.",LSLLessThanLRRL:"Lower specification limit should be lesser than or equal to lower routine release limit.",LSLLessThanLAL:"Lower specification limit should be lesser than or equal to lower acceptance limit.",USLGreaterThanLRRL:"Upper specification limit should be greater than or equal to lower routine release limit.",USLGreaterThanLAL:"Upper specification limit should be greater than or equal to lower acceptance limit.",LSLLessThanURRL:"Lower specification limit should be lesser than or equal to upper routine release limit.",LSLLessThanUAL:"Lower specification limit should be lesser than or equal to upper acceptance limit.",LSLLessThanUSL:"Lower specification limit should be lesser than or equal to upper specification limit.",LowerUpperValueIfIncEnabled:"Specify values in  Lower/Upper acceptance limit when Lower/Upper acceptance limit Inclusive is enabled.",LowerUpperRoutineValueIfIncEnabled:"Specify values in  Lower/Upper routine limit when Lower/Upper routine limit Inclusive is enabled.",LowerUpperSpecificationValueIfIncEnabled:"Specify values in  Lower/Upper specification limit when Lower/Upper specification limit Inclusive is enabled.",StateInWork:"In Work",StateExists:"Exists",typeMeasurement:"Measurement",typeDescriptive:"Descriptive",label_expandAll:"Expand All",label_collapseAll:"Collapse All",label_AcceptanceCriteria:"Acceptance Criteria",label_min:"Min",label_minValue:"Min Value",label_max:"Max",label_maxValue:"Max Value",label_targetValue:"Target Value",label_lessThan:"Less than",label_lessThanOrEqual:"Less than or Equal to",label_greaterThan:"Greater than",label_greaterThanOrEqual:"Greater than or Equal to",label_uomValue:"UOM Value",label_lowerRoutineLimit:"Lower Routine Limit",label_upperRoutineLimit:"Upper Routine Limit",label_lowerSpecificationLimit:"Lower Specification Limit",label_upperSpecificationLimit:"Upper Specification Limit",label_and:"and",info_clearPriority:"Priority field cannot be blank once updated with a value.",err_priorityLength:"Priority cannot exceed more than 5 digits.",Message_ValidateUpperLowerValue:"Verify that the entered value is valid or verify that the Upper value is greater than the Lower value",Message_ValidateAcceptanceValues:"Verify that the entered value is valid or verify that the Lower, Target and Upper values are within range",Message_RoutineWithInSpecLimits:"Verify that the entered value is valid or verify that the Routine Release Limits values are within the range of the Specification Limits values",Message_AcceptanceWithInSpecLimits:"Verify that the entered value is valid or verify that the Acceptance Criteria values are within the range of the Specification Limits values",Message_AcceptanceWithInRoutineLimits:"Verify that the entered value is valid or verify that the Acceptance Criteria values are within the range of the Routine Release Limits values",MATURITY_IN_WORK:"In Work",MATURITY_FROZEN:"Frozen",MATURITY_RELEASED:"Released",MATURITY_OBSOLETE:"Obsolete",Err_Cannot_Clear_Value:"Limit and Target values once set can not be removed.",label_DuplicateCharacteristics:"Duplicate Characteristics",Err_DuplicateChar:"An error occurred while duplicating the Characteristic(s). Verify that you have sufficient access rights or if any change action is associated.",Success_DuplicateChar:"Selected Characteristic(s) are duplicated.",Err_TMS_NotReleased:"Cannot add test method(s) because one or more test method(s) may not be released.",Message_TestMethodsAdded:"Test Method(s) were added.",Message_TestMethodsRemoved:" Test Method(s) were removed.",Err_MissedTargetAction:"Missed Target Action cannot be blank once updated with a value.",DeletePerformanceSpec:'"{title}" was deleted successfully.',type_PerformanceSpec:"Performance Specification",label_addTestMethods:"Add Test Methods",label_Latest:"Latest",Err_Duplicate_Unsupported:"Selected Characteristics were not duplicated as the following Characteritsics contain unsupported Dimension or Unit of Measure",Err_NoScopeLinkExists:"No scope link found, create a scope link with Engineering Item and try again",MfgItemSyncSuccess:"Performance Specifications were synced successfully",DerivedSpecRemoveSuccess:"Performance Specification was removed successfully",label_PerfSpecInformation:"Properties",label_SyncPerformanceSpecs:"Sync Performance Specifications",label_RemoveDerivedPerformanceSpecs:"Remove Inherited Performance Specifications",label_3DEXPERIENCEPlatform:"3DEXPERIENCE Platform",Error_PerformanceSpec_Resequence:"Resequence failed. Resequencing is only possible on Performance Characteristics.",Error_PerformanceChar_Resequence:'Resequence failed. Resequencing is possible only if the Performance Specification is in "In Work" state.',Error_NonParent_Resequence:"Resequence failed.Resequencing is possible only if the Performance Characteristic is dropped under its parent Performance Specification.",Error_NoAccess_Resequence:"Resequence failed.Verify that you have sufficient access rights. "});