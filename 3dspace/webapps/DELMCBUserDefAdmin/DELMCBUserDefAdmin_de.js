define("DS/DELMCBUserDefAdmin/DELMCBUserDefAdmin_de",{});define("DS/DELMCBUserDefAdmin/assets/nls/Applist",{apps:{Default:"Standard (Zuletzt verwendet)",AdditivePartPreparation:"Additive-Teil-Vorbereitung",AssemblyDefinition:"Baugruppendefinition",AssemblyEvaluation:"Baugruppenauswertung",AssemblyExperience:"Baugruppendarstellung",AssemblyPathOptimization:"Optimierung des Baugruppenpfads",ConstructionPlanning:"Konstruktionsplanung",CuttingToolsBuilder:"Cutting Tools Builder",DrillingRiveting:"Bohren-Nieten",EquipmentAllocation:"Equipment Allocation",EquipmentSimulation:"Equipment Simulation",EquipmentVirtualCommissioning:"Equipment Virtual Commissioning",ErgonomicWorkplaceDesign:"Ergonomische Arbeitsplatzgestaltung",ErgonomicsatWork:"Ergonomics at Work",FabricatedStepDefinition:"Definition des Fertigungsschritts",FactoryFlowSimulation:"Factory Flow Simulation",HeavyIndustryFluidicFabrication:"Heavy Industry Fluidic Fabrication",HeavyIndustryManufacturing:"Heavy Industry Manufacturing",HeavyIndustryProcessPlanning:"Heavy Industry Process Planning",HeavyIndustryStructureFabrication:"Heavy Industry Structure Fabrication",MachiningValidation:"Machining Validation",ManufacturedItemDefinition:"Manufactured Item Definition",ManufacturedItemDefinitionwithFasteners:"Manufactured Item Definition with Fasteners",MaterialDepositionFabrication:"Material Deposition Fabrication",MillingMachining:"Milling Machining",MillTurnMachining:"Mill-Turn Machining",MultiaxisMachining:"Multiaxis Machining",PlanningStructure:"Planning Structure",PlantLayoutDesign:"Plant Layout Design",PrismaticTurningMachining:"Prismatic Turning Machining",ProcessFlowSimulation:"Process Flow Simulation",ProcessPlanning:"Process Planning",ProcessPlanningwithFasteners:"Process Planning with Fasteners",RobotArcSimulation:"Robot Arc Simulation",RobotOptimization:"Roboteroptimierung",RobotProgramming:"Robot Programming",RobotSimulation:"Robot Simulation",RobotSpotProgramming:"Robot Spot Programming",RobotSpotSimulation:"Robot Spot Simulation",RobotSurfaceSimulation:"Roboter-Oberflächensimulation",RobotVirtualCommissioning:"Robot Virtual Commissioning",RobotVirtualCommissioningReview:"Prüfung der virtuellen Roboterinbetriebnahme",ServiceProcessStructure:"Service-Prozessstruktur",SimulationExperience:"Simulationserfahrung",TimeMotionStudy:"Time-Motion Study",VirtualCommissioningReview:"Prüfung der virtuellen Inbetriebnahme",WireEDMMachining:"Wire EDM Machining",WorkInstructions:"Work Instructions",WorkPlanPublication:"Work Plan Publication"}});define("DS/DELMCBUserDefAdmin/assets/nls/DELMCBUserDefAdmin",{"title.procedureID":"Vorgangs-ID","title.procedureName":"Vorgangsname","title.procedureDesc":"Beschreibung","title.procedureVisibility":"Vorgangssichtbarkeit","title.procedureAction":"Anwendbarkeit","title.procedureNodeType":"Eingabe-Objekttyp","title.openinapp":"In App öffnen","title.procedureModificationDate":"Datum der letzten Änderung","title.step":"Schritt","title.param1":"Parameter #1","title.param2":"Parameter #2","title.param3":"Parameter #3","title.editProcedure":"Vorgang bearbeiten","button.cancel":"Abbrechen","button.deploy":"Bereitstellen","command.createProc":"Neuen Vorgang erzeugen","command.deleteProc":"Ausgewählten Vorgang löschen","command.openProc":"Ausgewählten Vorgang öffnen","msg.deploySuccess":"{procx} wurde erfolgreich bereitgestellt","msg.deploySuccessTitle":"Bereitstellung erfolgreich","msg.deployFailTitle":"Bereitstellung nicht erfolgreich","msg.deleteSuccess":"{procx} wurde erfolgreich gelöscht","msg.deleteSuccessTitle":"Löschen erfolgreich","msg.deleteFailTitle":"Löschen fehlgeschlagen","msg.missingProcProperties":"Füllen Sie alle fehlenden Eigenschaften für die Prozedur aus","error.fileNotSelected":"Datei nicht ausgewählt","error.invalidInput":"Ungültige Eingabe","error.procedureID":"Die Vorgangs-ID muss das Format [Vorgangsname].[Hauptversionsnummer].[Nebenversionsnummer].[Patchnummer] aufweisen","error.validationFailed":"Fehler","error.invalidInputs":"Ungültige Eingabe/n","error.ProcActionValueNull":"Kein Anwendbarkeitswert ausgewählt","error.MinimumNbStep":"Das Verfahren sollte mindestens zwei Schritte umfassen","visible.inwork":"In Bearbeitung","visible.production":"Produktion","visible.obsolete":"Veraltet","action.udo":"Benutzerdefiniertes Öffnen","action.udo.shortHelp":"Aktiviert das Verfahren für den Befehl Benutzerdefiniertes Öffnen","action.ude":"Benutzerdefiniertes Durchsuchen","action.ude.shortHelp":"Aktiviert das Verfahren für den Befehl Benutzerdefiniertes Durchsuchen","action.udr":"Benutzerdefinierte Revision","action.udr.shortHelp":"Aktiviert das Verfahren für den Befehl Benutzerdefinierte Revision","nodetype.any":"Standard (beliebig)","nodetype.product":"EBOM","nodetype.item":"MBOM","nodetype.workplan":"Arbeitsplan","nodetype.system":"System","nodetype.resource":"Ressource","delete.title":"Löschen bestätigen","delete.message":"{procx} wird endgültig gelöscht. Dieser Vorgang kann nicht rückgängig gemacht werden. Sind Sie sicher?","menu.deleterow":"Zeile löschen","preferences.securityContext":"Anmeldeinformationen","preferences.tenant":"3DEXPERIENCE Platform","primitive.expandEBOM":"EBOM erweitern","primitive.expandEBOM.tooltip1":"Ein Navigationsset, das die EBOM-Vorkommen enthält","primitive.expandEBOM.tooltip2":"Eine Ganzzahl, die die Expansionstiefe definiert, d. h. die Anzahl der zu expandierenden Ebenen. Wenn auf 0 gesetzt, werden alle Ebenen expandiert","primitive.expandMBOM":"MBOM erweitern","primitive.expandMBOM.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.expandMBOM.tooltip2":"Eine Ganzzahl, die die Expansionstiefe definiert, d. h. die Anzahl der zu expandierenden Ebenen. Wenn auf 0 gesetzt, werden alle Ebenen expandiert","primitive.expandSystem":"System/Arbeitsplan erweitern","primitive.expandSystem.tooltip1":"Ein Navigationsset, das den Arbeitsplan oder die Systemvorkommen enthält","primitive.expandSystem.tooltip2":"Eine Ganzzahl, die die Expansionstiefe definiert, d. h. die Anzahl der zu expandierenden Ebenen. Wenn auf 0 gesetzt, werden alle Ebenen expandiert","primitive.expandResource":"Ressource erweitern","primitive.expandResource.tooltip1":"Ein Navigationsset, das die Ressourcenvorkommen enthält","primitive.expandResource.tooltip2":"Eine Ganzzahl, die die Expansionstiefe definiert, d. h. die Anzahl der zu expandierenden Ebenen. Wenn auf 0 gesetzt, werden alle Ebenen expandiert","primitive.expandMultiRoot":"Multi-Root erweitern","primitive.expandMultiRoot.tooltip1":"Multi-Root erweitern","primitive.expandMultiRoot.tooltip2":"Multi-Root erweitern","primitive.keepRoot":"Root beibehalten","primitive.keepRoot.tooltip1":"Ein Navigationsset, das die Vorkommen enthält, aus denen der Benutzer nur die Stammentität extrahieren und beibehalten möchte","primitive.I3DexpandEBOM":"EBOM mithilfe des 3D-Index erweitern","primitive.I3DexpandEBOM.tooltip1":"Ein Navigationsset, das die EBOM-Vorkommen enthält","primitive.I3DexpandEBOM.tooltip2":"Eine Ganzzahl, die die Expansionstiefe definiert, d. h. die Anzahl der zu expandierenden Ebenen. Wenn auf 0 gesetzt, werden alle Ebenen expandiert","primitive.I3DexpandMBOM":"MBOM mithilfe des 3D-Index erweitern","primitive.I3DexpandMBOM.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.I3DexpandMBOM.tooltip2":"Eine Ganzzahl, die die Expansionstiefe definiert, d. h. die Anzahl der zu expandierenden Ebenen. Wenn auf 0 gesetzt, werden alle Ebenen expandiert","primitive.I3DRetrieveContext":"Kontext-EBOM und -MBOM mit 3D-Index abrufen","primitive.I3DRetrieveContext.tooltip1":"Ein Navigationsset, das die zu erweiternden EBOM-Vorkommen enthält","primitive.I3DRetrieveContext.tooltip2":"Ein Navigationsset, das die MBOM-Vorkommen enthält, die mit einer EBOM (in der Regel die Stamm-MBOM) ausgestattet sind","primitive.I3DRetrieveContext.tooltip3":"Ein Navigationsset, das die ausgewählte MBOM enthält (in der Regel die Installations-MBOM)","primitive.navigateFromMBOMToEBOM":"Von MBOM zu EBOM navigieren","primitive.navigateFromMBOMToEBOM.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.navigateFromMBOMToEBOM.tooltip2":"Ein boolesches Array, das die drei Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenz-Referenzmuster navigiert \n iRef_OccRef: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenz-Vorkommen-Referenzmuster navigiert \n iInst_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Instanzvorkommensmuster navigiert \n\n Zum Beispiel: [true, true, true]","primitive.navigateFromEBOMToMBOM":"Von EBOM zu MBOM navigieren","primitive.navigateFromEBOMToMBOM.tooltip1":"Ein Navigationsset, das die EBOM-Vorkommen enthält","primitive.navigateFromEBOMToMBOM.tooltip2":"Ein boolesches Array, das die drei Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenz-Referenzmuster navigiert \n iRef_OccRef: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenz-Vorkommen-Referenzmuster navigiert \n iInst_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Instanzvorkommensmuster navigiert \n\n Zum Beispiel: [true, true, true]","primitive.fastenersAnalysisBothSides":"Beidseitige Verbindungselementanalyse","primitive.fastenersAnalysisBothSides.tooltip1":"Ein Navigationsset, das die EBOM-Vorkommen enthält","primitive.fastenersAnalysisBothSidesLegacy":"Beidseitige Verbindungselementanalyse - Vorhanden","primitive.fastenersAnalysisBothSidesLegacy.tooltip1":"Ein Navigationsset, das die EBOM-Vorkommen enthält","primitive.getEBOMThroughMBOMAssignmentFilter":"EBOMs mit Zuweisungsfilter aus MBOMs abrufen","primitive.getEBOMThroughMBOMAssignmentFilter.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.getEBOMThroughMBOMAssignmentFilter.tooltip2":"Ein boolescher Wert, der den Navigationsmodus definiert: \n Wenn dieser Wert auf True gesetzt ist, wird durch physische IDs navigiert \n Wenn dieser Wert auf False gesetzt ist, wird durch logische IDs navigiert","primitive.getMBOMPredecessors":"MBOM-Vorgänger abrufen","primitive.getMBOMPredecessors.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.getMBOMPredecessors.tooltip2":"Eine Ganzzahl, die die Anzahl der abzurufenden Ebenen von Vorgängern definiert \n Wenn dieser Wert auf 0 gesetzt ist, werden alle Ebenen abgerufen","primitive.getResultingProductFromMBOM":"Resultierende Produkte aus MBOM abrufen","primitive.getResultingProductFromMBOM.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.navigateFromWorkPlanToMBOM":"Von Arbeitsplan zu MBOM navigieren","primitive.navigateFromWorkPlanToMBOM.tooltip1":"Ein Navigationsset, das die Vorkommen des Arbeitsplans enthält","primitive.navigateFromWorkPlanToMBOM.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenzreferenzmuster navigiert \n iOCC_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Vorkommen-Vorkommen-Muster navigiert \n zum Beispiel: [true, true]","primitive.navigateFromMBOMToWorkPlan":"Von MBOM zu Arbeitsplan navigieren","primitive.navigateFromMBOMToWorkPlan.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.navigateFromMBOMToWorkPlan.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenzreferenzmuster navigiert \n iOCC_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Vorkommen-Vorkommen-Muster navigiert \n zum Beispiel: [true, true]","primitive.navigateFromProcessToMBOM":"Von System/Arbeitsplan zur MBOM navigieren","primitive.navigateFromProcessToMBOM.tooltip1":"Ein Navigationsset, das die Systemvorkommen enthält","primitive.navigateFromProcessToMBOM.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenzreferenzmuster navigiert \n iOCC_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Vorkommen-Vorkommen-Muster navigiert \n zum Beispiel: [true, true]","primitive.navigateFromMBOMToSystem":"Von MBOM zu System navigieren","primitive.navigateFromMBOMToSystem.tooltip1":"Ein Navigationsset, das die MBOM-Vorkommen enthält","primitive.navigateFromMBOMToSystem.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenzreferenzmuster navigiert \n iOCC_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Vorkommen-Vorkommen-Muster navigiert \n zum Beispiel: [true, true]","primitive.I3DnavigateFromProcessToMBOM":"Navigieren Sie mithilfe von 3D-Index vom System/Arbeitsplan zur MBOM","primitive.I3DnavigateFromProcessToMBOM.tooltip1":"Ein Navigationsset, das die System-/Arbeitsplanvorkommen enthält","primitive.I3DnavigateFromProcessToMBOM.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenzreferenzmuster navigiert \n iOCC_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Vorkommen-Vorkommen-Muster navigiert \n zum Beispiel: [true, true]","primitive.navigateFromSystemToWorkPlan":"Von System zu Arbeitsplan navigieren","primitive.navigateFromSystemToWorkPlan.tooltip1":"Ein Navigationsset, das die Systemvorkommen enthält","primitive.navigateFromSystemToWorkPlan.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenzreferenzmuster navigiert \n iOCC_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Vorkommen-Vorkommen-Muster navigiert \n zum Beispiel: [true, true]","primitive.navigateFromWorkPlanToSystem":"Von Arbeitsplan zu System navigieren","primitive.navigateFromWorkPlanToSystem.tooltip1":"Ein Navigationsset, das die Vorkommen des Arbeitsplans enthält","primitive.navigateFromWorkPlanToSystem.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt: \n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenzreferenzmuster navigiert \n iOCC_Occ: Wenn dieser Wert auf True gesetzt ist, wird nach einem Vorkommen-Vorkommen-Muster navigiert \n zum Beispiel: [true, true]","primitive.navigateFromProcessToResource":"Von System zu Ressource navigieren","primitive.navigateFromProcessToResource.tooltip1":"Ein Navigationsset, das die Systemvorkommen enthält","primitive.navigateFromProcessToResource.tooltip2":"Ein boolesches Array, das die vier Navigationsmodi angibt:\n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenz-Referenz-Muster für den Geltungsbereich navigiert\n iOCC_Occ_With: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Vorkommen-Muster für die 'with'-Ressourcen navigiert\n iOCC_Occ_Where: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Vorkommen-Muster für die 'where'-Ressourcen navigiert\n iOCC_Occ_Who: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Port-Vorkommen-Muster für die 'who'-Ressourcen navigiert","primitive.navigateFromResourceToSystem":"Von Resource zu System navigieren","primitive.navigateFromResourceToSystem.tooltip1":"Ein Navigationsset, das die Ressourcenvorkommen enthält","primitive.navigateFromResourceToSystem.tooltip2":"Ein boolesches Array, das die vier Navigationsmodi angibt:\n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenz-Referenz-Muster für den Geltungsbereich navigiert\n iOCC_Occ_With: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Vorkommen-Muster für die 'with'-Ressourcen navigiert\n iOCC_Occ_Where: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Vorkommen-Muster für die 'where'-Ressourcen navigiert\n iOCC_Occ_Who: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Port-Vorkommen-Muster für die 'who'-Ressourcen navigiert","primitive.navigateFromResourceToWorkplan":"Von Resource zu Arbeitsplan navigieren","primitive.navigateFromResourceToWorkplan.tooltip1":"Ein Navigationsset, das die Ressourcenvorkommen enthält","primitive.navigateFromResourceToWorkplan.tooltip2":"Ein boolesches Array, das die vier Navigationsmodi angibt:\n iRef_Ref: Wenn dieser Wert auf True gesetzt ist, wird nach einem Referenz-Referenz-Muster für den Geltungsbereich navigiert\n iOCC_Occ_With: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Vorkommen-Muster für die 'with'-Ressourcen navigiert\n iOCC_Occ_Where: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Vorkommen-Muster für die 'where'-Ressourcen navigiert\n iOCC_Occ_Who: Wenn dieser Wert auf True gesetzt ist, wird nur nach einem Vorkommen-Port-Vorkommen-Muster für die 'who'-Ressourcen navigiert","primitive.getAllProcessPredecessors":"Alle Vorgänger abrufen","primitive.getAllProcessPredecessors.tooltip1":"Ein Navigationsset, das das System, den Arbeitsplan oder die Operationsvorkommen enthält","primitive.getCapableRscLinkInContextFromProcess":"Vom System zur geeigneten Ressource im Kontext navigieren","primitive.getCapableRscLinkInContextFromProcess.tooltip1":"Ein Navigationsset, das die Systemvorkommen enthält","primitive.getCapableRscLinkInContextFromProcess.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt:\n iContext: Wenn dieser Wert auf True gesetzt ist, wird der Geltungsbereichslink navigiert, um die geeignete Ressource im Kontext abzurufen\n iLink: Wenn dieser Wert auf True gesetzt ist, wird der Link navigiert, um die geeignete Ressource im Kontext abzurufen","primitive.getAssetRscLinkFromWorkplan":"Von System- zu Ressourcen-Asset-Referenzvorkommen navigieren","primitive.getAssetRscLinkFromWorkplan.tooltip1":"Ein Navigationsset, das die Systemvorkommen enthält","primitive.getAssetRscLinkFromWorkplan.tooltip2":"Ein boolesches Array, das die beiden Navigationsmodi angibt:\n iContext: Wenn dieser Wert auf True gesetzt ist, wird der Bereichslink navigiert, um die Einrichtungsstruktur abzurufen\n iLink: Wenn dieser Wert auf True gesetzt ist, wird der Link navigiert, um den vorab zugewiesenen Arbeitsplatz abzurufen","primitive.getCapableRscLinkFromProcess":"Vom Systemvorkommen zur Referenz der geeigneten Ressource navigieren","primitive.getCapableRscLinkFromProcess.tooltip1":"Ein Navigationsset, das die Systemvorkommen enthält","primitive.getCapableRscLinkFromProcess.tooltip2":"Ein boolesches Array, das die drei Navigationsmodi angibt:\n iContext: Navigiert den Geltungsbereich-Link, um die geeignete Ressourcenstruktur abzurufen\n iPrimLink: Wenn dieser Wert auf True gesetzt ist, wird der Link navigiert, um die primäre geeignete Ressource abzurufen\n iSecLink: Wenn dieser Wert auf True gesetzt ist, wird zum Link navigiert, um die sekundäre geeignete Ressource abzurufen","primitive.ModifyContextWithProximityVolume":"Kontext mit Näherungsvolumen ändern","primitive.ModifyContextWithProximityVolume.tooltip1":"Ein Navigationsset, das die EBOM-Vorkommen enthält","primitive.ModifyContextWithProximityVolume.tooltip2":"Der Versatz in Millimetern","primitive.ModifyContextWithProximityVolume.tooltip3":"eReplace ist der einzige verfügbare Wert für diesen Parameter und ersetzt das Kontextvolumen durch das Näherungsvolumen","primitive.ModifyContextWithBoundingBoxVolume":"Kontext mit Begrenzungsrahmen-Volumen ändern","primitive.ModifyContextWithBoundingBoxVolume.tooltip1":"Ein Navigationsset, das die EBOM-Vorkommen enthält","primitive.ModifyContextWithBoundingBoxVolume.tooltip2":"Der Versatz in Millimetern","primitive.ModifyContextWithBoundingBoxVolume.tooltip3":"eReplace ist der einzige verfügbare Wert für diesen Parameter und ersetzt das Kontextvolumen durch das Näherungsvolumen","primitive.getFirstUpperScopeFromMBOMToEBOM":"Ersten oberen Bereich aus MBOM in EBOM abrufen","primitive.getFirstUpperScopeFromMBOMToEBOM.tooltip1":"Ein Navigationsset, das MBOM-Vorkommen enthält","primitive.compact":"Kompaktes Navigationsset","primitive.compact.tooltip1":"Ein Navigationsset, das die zu filternden Vorkommen enthält","primitive.merge":"Navigationsset zusammenführen","primitive.merge.tooltip1":"Das Navigationsset, das im Ausgang des vorherigen Grundkörpers eingefügt werden soll","primitive.cutLeafOccurrences":"Schnittblatt-Vorkommen","primitive.cutLeafOccurrences.tooltip1":"Ein Navigationsset, das die zu filternden Vorkommen enthält","primitive.removeOccurrences":"Vorkommen entfernen","primitive.removeOccurrences.tooltip1":"Ein Navigationsset, das die zu filternden Vorkommen enthält","primitive.removeOccurrences.tooltip2":"Die WhereClause, die auf die Referenzen anzuwenden ist","primitive.insert":"Navigationsset einfügen","primitive.insert.tooltip1":"Das Navigationsset (das einen Filter enthält), in das das Vorkommen eingefügt werden soll","primitive.insert.tooltip2":"Das Navigationsset der einzufügenden Vorkommen","primitive.filterOnLeaves":"Nach Blättern filtern","primitive.filterOnLeaves.tooltip1":"Ein Navigationsset, das die zu filternden Vorkommen enthält","primitive.filterOnLeaves.tooltip2":"Die WhereClause, die für die endgültigen Referenzen (Blätter) gelten soll","primitive.cutOccurrences":"Schnitt-Vorkommen","primitive.cutOccurrences.tooltip1":"Ein Navigationsset, das die zu filternden Vorkommen enthält","primitive.cutOccurrences.tooltip2":"Die WhereClause, die auf die Referenzen anzuwenden ist","primitive.Open":"Öffnen","primitive.Open.tooltip1":"Die Navigation wird auf Öffnen gesetzt","primitive.stopAt":"Stoppen bei","primitive.stopAt.tooltip1":"Navigationsset, dessen übergeordnete Elemente nicht durch die benutzerdefinierte Revision geändert werden sollen","primitive.tooltip.unused":"Nicht verwendet","command.udo":"UDO","command.ude":"UDE","command.udr":"UDR"});