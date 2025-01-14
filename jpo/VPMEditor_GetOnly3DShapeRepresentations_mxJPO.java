
import matrix.db.Context;
import com.dassault_systemes.EKLEngine.completion.CompletionJPOEvaluator;


/**
 * ${CLASSNAME}
 */
public final class VPMEditor_GetOnly3DShapeRepresentations_mxJPO extends CompletionJPOEvaluator {

	/**
	 * Attributes
	 */
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_0__PRODUCTCFG_div_VPMRef = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PRODUCTCFG/VPMReference");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_1__PRODUCTCFG_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PRODUCTCFG");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_2__ProductCfg_Add3DShape = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("ProductCfg_Add3DShapeOnly");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_3__PRODUCTCFG_div_VPMRep = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PRODUCTCFG/VPMRepReference");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_4__ProductCfg_AddLPPriva = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("ProductCfg_AddLPPrivateRep");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_5__XCADAssembly_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("XCADAssembly");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_6__XcadAssembly_ExpandVP = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("XcadAssembly_ExpandVPMRefToXCADRepRepInst");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_7__PLMKnowledgewareDisci = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMKnowledgewareDiscipline");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_8__KwaDiscipline_AddPoin = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("KwaDiscipline_AddPointedDesignTable");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_9__ProductCfg_AddVPMPort = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("ProductCfg_AddVPMPortsAndConnections");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_10__RFLPLMImplementConne = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("RFLPLMImplementConnection");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_11__RFLPLMImplementConne = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("RFLPLMImplementConnection_AddAllImplementCnx");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_12__MatAppliedExportDesi = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("MatAppliedExportDesign");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_13__RawMaterialSpecifica = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("RawMaterialSpecification");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_14__RawMat_retrieveAllAp = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("RawMat_retrieveAllAppliedRawMaterial");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_15__CATMCXAssembly_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("CATMCXAssembly");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_16__CATMCXAssembly_AddAl = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("CATMCXAssembly_AddAllAggregatedMCX");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_17__CATAsmSymGeo_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("CATAsmSymGeo");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_18__CATAsmSymObj_AddAllS = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("CATAsmSymObj_AddAllSymObj");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_19__PLMFst_Fasteners_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMFst_Fasteners");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_20__PLMFst_Fasteners_Add = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMFst_Fasteners_AddAllAggregatedCNX");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_21__PLMDocConnection_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMDocConnection");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_22__PLMDocConnection_ret = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMDocConnection_retrieveAllDocuments");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_23__PLMWspSpecFilter_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMWspSpecFilter");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_24__PLMWspSpecFilter_Add = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMWspSpecFilter_AddAllAggregatedSpecPVS");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_25__PLMEnsGrouping_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMEnsGrouping");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_26__PLMEnsGrouping_AddGr = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMEnsGrouping_AddGrouping");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_27__PLMLSRRouteConnectio = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMLSRRouteConnection");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_28__PLMLSRRouteConnectio = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMLSRRouteConnection_AddLsrCnx");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_29__PLMSpacePlanning_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMSpacePlanning");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_30__SPPConnection_addAll = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("SPPConnection_addAllSPPConnection");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_31__PLMStructureDesign_ = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("PLMStructureDesign");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_32__StrConnection_addAll = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("StrConnection_addAllStrConnection");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_33__DocumentCompletion_a = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("DocumentCompletion_allDocumentCompletion");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_34__Config_GetStructConf = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("Config_GetStructConfig");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_35__com_dot_dassault_sys = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("com.dassault_systemes.enovia.xapps.dsbsd.V1.implementations.util.VPMReferenceCompletion");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_36__ElectricalManufactur = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("ElectricalManufacturingPreparation");
	private final static com.dassault_systemes.EKLEngine.common.lib.implementation.StringType _STRING_37__ElecMfgPreparation_a = new com.dassault_systemes.EKLEngine.common.lib.implementation.StringType("ElecMfgPreparation_addAllRelatedElements");

	/**
	 * evaluate
	 * @param iContext
	 * @param iPLMIDSet
	 * @param oPLMIDSet
	 */
	public final void evaluate(matrix.db.Context iContext, com.dassault_systemes.EKLEngine.common.lib.PLMIDSet iPLMIDSet, com.dassault_systemes.EKLEngine.common.lib.PLMIDSet oPLMIDSet)	
			throws Exception {
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet1 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet2 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet3 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet5 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet7 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet8 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet9 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet10 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet11 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet13 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet14 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet15 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet16 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet17 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet18 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet19 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet PLMRouteSet20 = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet rsXCADRepRepInst = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet idsTerminologies = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet PLMIDSet1 = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet PLMIDSet7 = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet PLMIDSet8 = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet PLMIDSet9 = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet PLMIDSet_Mat = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet PLMIDSetRestrictedRefAndRep = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet PLMIDSetRestricted = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet idsConfig = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMIDSet idsDocument = new com.dassault_systemes.EKLEngine.common.lib.PLMIDSet();
		com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet rsElecMfgPreprationRelation = new com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet();
		PLMIDSetRestricted.setValue( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.Restrict( iContext , iPLMIDSet, _STRING_0__PRODUCTCFG_div_VPMRef ) );
		PLMRouteSet1.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_1__PRODUCTCFG_, _STRING_2__ProductCfg_Add3DShape, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMIDSet1.setValue( com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet1 ) );
		PLMIDSetRestrictedRefAndRep.setValue( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( PLMIDSetRestricted, com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.Restrict( iContext , PLMIDSet1, _STRING_3__PRODUCTCFG_div_VPMRep ) ) );
		PLMRouteSet15.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_1__PRODUCTCFG_, _STRING_4__ProductCfg_AddLPPriva, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		rsXCADRepRepInst.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_5__XCADAssembly_, _STRING_6__XcadAssembly_ExpandVP, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet2.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_7__PLMKnowledgewareDisci, _STRING_8__KwaDiscipline_AddPoin, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.Restrict( iContext , PLMIDSet1, _STRING_3__PRODUCTCFG_div_VPMRep ) } ) );
		PLMRouteSet3.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_1__PRODUCTCFG_, _STRING_9__ProductCfg_AddVPMPort, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestrictedRefAndRep } ) );
		PLMRouteSet5.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_10__RFLPLMImplementConne, _STRING_11__RFLPLMImplementConne, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMIDSet_Mat.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMProcedure( iContext , _STRING_12__MatAppliedExportDesi, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet20.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_13__RawMaterialSpecifica, _STRING_14__RawMat_retrieveAllAp, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet10.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_15__CATMCXAssembly_, _STRING_16__CATMCXAssembly_AddAl, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet11.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_17__CATAsmSymGeo_, _STRING_18__CATAsmSymObj_AddAllS, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet18.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_19__PLMFst_Fasteners_, _STRING_20__PLMFst_Fasteners_Add, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet13.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_21__PLMDocConnection_, _STRING_22__PLMDocConnection_ret, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet14.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_23__PLMWspSpecFilter_, _STRING_24__PLMWspSpecFilter_Add, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet7.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_25__PLMEnsGrouping_, _STRING_26__PLMEnsGrouping_AddGr, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet16.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_27__PLMLSRRouteConnectio, _STRING_28__PLMLSRRouteConnectio, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet17.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_29__PLMSpacePlanning_, _STRING_30__SPPConnection_addAll, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		PLMRouteSet19.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_31__PLMStructureDesign_, _STRING_32__StrConnection_addAll, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		idsDocument.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMProcedure( iContext , _STRING_33__DocumentCompletion_a, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		idsConfig.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMProcedure( iContext , _STRING_34__Config_GetStructConf, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { iPLMIDSet } ) );
		idsTerminologies.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecuteJavaProcedure( iContext , _STRING_35__com_dot_dassault_sys, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		rsElecMfgPreprationRelation.setValue( com.dassault_systemes.EKLEngine.completion.lib.Completion.ExecutePLMFunction( iContext , _STRING_36__ElectricalManufactur, _STRING_37__ElecMfgPreparation_a, new com.dassault_systemes.EKLEngine.common.lib.implementation.ObjectType[] { PLMIDSetRestricted } ) );
		oPLMIDSet.setValue( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( com.dassault_systemes.EKLEngine.common.lib.PLMIDSet.plus( iPLMIDSet, PLMIDSet1 ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet2 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet3 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet5 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet10 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet11 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( rsElecMfgPreprationRelation ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet13 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet15 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( rsXCADRepRepInst ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet14 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet7 ) ), PLMIDSet_Mat ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet20 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet16 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet17 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet18 ) ), com.dassault_systemes.EKLEngine.common.lib.PLMRouteSet.Ids( PLMRouteSet19 ) ), idsConfig ), idsDocument ), idsTerminologies ) );
	}
}
