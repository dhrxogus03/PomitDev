define("DS/XSRCommonComponents/createform/control/BOMCreateModel",["DS/XSRCommonComponents/utils/TypeUtils","DS/TreeModel/TreeDocument","DS/TreeModel/TreeNodeModel","DS/XSRCommonComponents/utils/Constants"],function(e,t,i,s){"use strict";return class{constructor(){this._id="",this._title="",this._titleDB="",this._policy="",this._policyDB="",this._type="",this._typeDB="",this._created="",this._createdDB="",this._current="",this._currentDB="",this._responsible="",this._responsibleDB="",this._lastModifiedOn="",this._lastModifiedOnDB="",this._description="",this._descriptionDB="",this._name="",this._nameDB="",this._revision="",this._revisionDB="",this._icon="",this._iconDB="",this._dimension=void 0,this._dimensionDB=void 0,this._unit="EA (each)",this._unitDB="EA",this._quantity=1,this._asRequired=!1,this._referenceName="",this._isMBMF=!1,this._uomList=null,this._uomListTree=null,this._flattenedtaxonomies=[],this._connectCM=!1,this._canConnectCM=!1,this._connectCM_Msg="",this._relationID=null,this._parentID=null,this._coreMaterial=[]}setModel(e){let t=this;return e.id&&(t.id=e.id),e["ds6w:label"]&&(t.title=e["ds6w:label"]),e["ds6w:label_value"]&&(t.titleDB=e["ds6w:label_value"]),e["ds6w:policy"]&&(t.policy=e["ds6w:policy"]),e["ds6w:policy_value"]&&(t.policyDB=e["ds6w:policy_value"]),e["ds6w:type"]&&(t.type=e["ds6w:type"]),e["ds6w:type_value"]&&(t.typeDB=e["ds6w:type_value"]),e["ds6w:created"]&&(t.created=e["ds6w:created"]),e["ds6w:created_value"]&&(t.createdDB=e["ds6w:created_value"]),e["ds6w:status"]&&(t.current=e["ds6w:status"]),e["ds6w:status_value"]&&(t.currentDB=e["ds6w:status_value"]),e["ds6w:responsible"]&&(t.responsible=e["ds6w:responsible"]),e["ds6w:responsible_value"]&&(t.responsibleDB=e["ds6w:responsible_value"]),e["ds6w:modified"]&&(t.lastModifiedOn=e["ds6w:modified"]),e["ds6w:modified_value"]&&(t.lastModifiedOnDB=e["ds6w:modified_value"]),e["ds6w:description"]&&(t.description=e["ds6w:description"]),e["ds6w:description_value"]&&(t.descriptionDB=e["ds6w:description_value"]),e["ds6w:label"]&&(t.name=e["ds6w:label"]),e["ds6w:label_value"]&&(t.nameDB=e["ds6w:label_value"]),e["ds6wg:revision"]&&(t.revision=e["ds6wg:revision"]),e["ds6wg:revision_value"]&&(t.revisionDB=e["ds6wg:revision_value"]),e.type_icon_url&&(t.icon=e.type_icon_url),e.type_icon_url_value&&(t.iconDB=e.type_icon_url_value),e["ds6wg:raw_material.v_dimensiontype"]&&(t.dimension=e["ds6wg:raw_material.v_dimensiontype"]),e["ds6wg:raw_material.v_dimensiontype_value"]&&(t.dimensionDB=e["ds6wg:raw_material.v_dimensiontype_value"]),e.flattenedtaxonomies&&(t.flattenedtaxonomies=e.flattenedtaxonomies),this}processDimensionRelatedData(){let t=e.getUOMUnits(this.dimensionDB);this.uomList=t,this.uomListTree=t,this.unitDB=void 0,this.unit=void 0,this.quantity=void 0}getDefaultUOMDB(){return"mass"===this.dimensionDB.toLowerCase()?"KILOGRAM":"length"===this.dimensionDB.toLowerCase()?"METER":"volume"===this.dimensionDB.toLowerCase()?"METER3":"area"===this.dimensionDB.toLowerCase()?"METER2":void 0}dataToSubmit(){let e={isInheritCoreMaterial:this.connectCM,referenceName:this.referenceName};return this.isMBMF?e.madeFromPID=this.id:e.rawMatID=this.id,this._dimensionDB&&(e.asRequired=this.asRequired,e.quantity=this.quantity?this.quantity.toString()+" "+this.unitDB:"",e.uomType=this.dimensionDB),e}get copy(){let e=Object.assign(Object.create(Object.getPrototypeOf(this)),this);return e.connectCM=!1,e.dimensionDB?(e.unit=void 0,e.unitDB=void 0,e.quantity=void 0):(e.unit="EA (each)",e.unitDB="EA",e.quantity=1),e.asRequired=!1,e.connectCM=!1,e.referenceName="",e}getMbmfJsonForEIM(e){let t={madeFromProductTitle:this.title,madeFromProductID:this.id,madeFromRelationId:this.relationID,madeFromProductRevision:"A",treeOrder:e.treeOrder||"0.0",isComputed:this.isComputed,MakeFrom_extensions:e.MakeFrom_extensions||[],other_attributes:e.other_attributes||[],madeFromParentID:this.parentID,madeFromProductType:{dbName:this.typeDB,nlsLabel:this.type},ReferenceName:this.referenceName};return this._dimensionDB&&(t.asRequired=this.asRequired,t.dimensionType={dbName:this.dimensionDB,nlsLabel:this.dimension},t.quantity=this.quantity?this.quantity.toString():"",this.unitDB&&(t.unit={dbName:this.unitDB||this.getDefaultUOMDB(),nlsLabel:this.unit||this.uomList[this.getDefaultUOMDB()]})),t}get id(){return this._id}set id(e){this._id=e}get title(){return this._title}set title(e){this._title=e}get titleDB(){return this._titleDB}set titleDB(e){this._titleDB=e}get policy(){return this._policy}set policy(e){this._policy=e}get policyDB(){return this._policyDB}set policyDB(e){this._policyDB=e}get type(){return this._type}set type(e){this._type=e}get typeDB(){return this._typeDB}set typeDB(e){this._typeDB=e}get created(){return this._created}set created(e){this._created=e}get createdDB(){return this._createdDB}set createdDB(e){this._createdDB=e}get current(){return this._current}set current(e){this._current=e}get currentDB(){return this._currentDB}set currentDB(e){this._currentDB=e}get responsible(){return this._responsible}set responsible(e){this._responsible=e}get responsibleDB(){return this._responsibleDB}set responsibleDB(e){this._responsibleDB=e}get lastModifiedOn(){return this._lastModifiedOn}set lastModifiedOn(e){this._lastModifiedOn=e}get lastModifiedOnDB(){return this._lastModifiedOnDB}set lastModifiedOnDB(e){this._lastModifiedOnDB=e}get description(){return this._description}set description(e){this._description=e}get descriptionDB(){return this._descriptionDB}set descriptionDB(e){this._descriptionDB=e}get name(){return this._name}set name(e){this._name=e}get nameDB(){return this._nameDB}set nameDB(e){this._nameDB=e}get revision(){return this._revision}set revision(e){this._revision=e}get revisionDB(){return this._revisionDB}set revisionDB(e){this._revisionDB=e}get icon(){return this._icon}set icon(e){this._icon=e}get iconDB(){return this._iconDB}set iconDB(e){this._iconDB=e}get dimension(){return this._dimension}set dimension(e){this._dimension=e}get dimensionDB(){return this._dimensionDB}set dimensionDB(e){this._dimensionDB=e,this.processDimensionRelatedData()}get unit(){return this._unit}set unit(e){this._unit=e}get unitDB(){return this._unitDB}set unitDB(e){this._unitDB=e}get quantity(){return this._quantity}set quantity(e){this._quantity=e}get asRequired(){return this._asRequired}set asRequired(e){this._asRequired=e}get connectCM(){return this._connectCM}set connectCM(e){this._connectCM=e}get canConnectCM(){return this._canConnectCM}set canConnectCM(e){this._canConnectCM=e}get connectCM_Msg(){return this._connectCM_Msg}set connectCM_Msg(e){this._connectCM_Msg=e}get referenceName(){return this._referenceName}set referenceName(e){this._referenceName=e}get isMBMF(){return this._isMBMF}set isMBMF(e){this._isMBMF=e}get coreMaterial(){return this._coreMaterial}set coreMaterial(e){Array.isArray(e)&&(this._coreMaterial=e)}get uomListTree(){return this._uomListTree}set uomListTree(e){this._uomListTree=new t,this._uomListTree.prepareUpdate(),Object.keys(e).forEach(t=>{let s=new i({label:e[t],value:t});this._uomListTree.addChild(s)}),this._uomListTree.pushUpdate()}get uomList(){return this._uomList}set uomList(e){this._uomList=e}get flattenedtaxonomies(){return this._flattenedtaxonomies}set flattenedtaxonomies(e){this._flattenedtaxonomies=[],e.forEach(e=>{this._flattenedtaxonomies.push(e.split("/")[1])})}get relationID(){return this._relationID}set relationID(e){this._relationID=e}get isComputed(){return!1}get parentID(){return this._parentID}set parentID(e){this._parentID=e}}});