define("DS/IssueManagement/IssueManagement_cs",{});define("DS/IssueManagement/assets/nls/IssueManagement",{titles:{issues:"Počet problémů: {number}",placeholder:{title:"Žádné problémy k zobrazení.",label:"Nebyly nalezeny žádné problémy, které by odpovídaly vašim filtrům.",sub:"Zkuste změnit kritéria filtru {filter} nebo vytvořit nový problém {create}.",sub2:"Zkuste změnit kritéria filtru {filter}"},refreshing:"Obnovování problémů...",documentation:"Issue Management – Nápověda"},error:{generic:{label:"Jejda! Něco se pokazilo.",sub:"Došlo k problému s vaším požadavkem, obnovte stránku a zkuste to znovu."},licensing:{label:"Chyba licence.",sub:"Server nemůže získat licenci pro uživatele {user}"}},information:{toggleTooltip:"Informace",layoutSwitcherTooltip:"Možnost zobrazení",right:"Zobrazit vpravo",bottom:"Zobrazit dole",views:{properties:"Vlastnosti",relatedObjects:"Obsah",contexts:"Kontexty",team:"Členové",attachments:"Přílohy",comments:"Komentáře",relations:"Vztahy",history:"Historie",documents:"Dokumenty",noSelection:"Vyberte problém, jehož informace chcete zobrazit."},header:{summary:"Otevřeno před {timeSince}. Vlastníkem je {ownerIcon} {owner}.",multipleSelection:{title:"Vybráno problémů: {number}.",summary:"Změny se použijí na vše."},showMenu:"Akce",goToNext:"Přejít k dalšímu problému.",close:"Zavřít",goToPrevious:"Přejít k předchozímu problému.",Varies:"Mění se",changeResponsibleOrg:"Odpovědná organizace",changeReportingOrg:"Organizace podávající hlášení",moveResponsibleOrg:"Přesunout odpovědnou organizaci",moveReportingOrg:"Přesunout organizaci podávající hlášení",moveOrgMsg:"Změna odpovědné organizace byla úspěšná.",moveReportingOrgMsg:"Změna organizace podávající hlášení proběhla úspěšně.",move:"Přesunout",cancel:"Zrušit"}},actions:{create:{title:"Nový problém",more:"Nový z...",placeholder:"Název nového problému...",open:"Otevřít dialogové okno vytvoření",clear:"Vymazat",success:"Problém „{title}“ byl úspěšně vytvořen.",failure:"Během vytváření došlo k chybě, zkuste to znovu.",issue:{blank:"Nový problém",template:"Nový problém ze šablony",recentTemplate:"Poslední šablony",similarIssues:"Počet nalezených podobných problémů: {count}."}},changeAction:"Přidat novou akci změny jako Vyřešeno uživatelem",markup3D:"Přidat novou 3D značku jako přílohu",templates:"Spravovat šablony",print:"Tisk","export":"Exportovat jako",exportCSV:"CSV",exportPPTX:"PPTX",exportZIP:"PSČ",customizeView:"Konfigurovat tabulková zobrazení",select:{title:"Vybrat objekty",selectIssues:"Vybrat všechny problémy",selectChildren:"Vybrat veškerý viditelný obsah problému",unselectAll:"Zrušit výběr všech"},find:{title:"Najít",placeholder:"Najít...",clear:"Vymazat",next:"Další {number1} / {number2}",previous:"Předchozí {number1} / {number2}",select:"Vybrat nalezené problémy v počtu {number}"},gridView:"Tabulkové zobrazení",listView:"Zobrazení seznamu",kanbanView:"Zobrazení Kanban",more:"Další akce",dummy:"Nedostupný",subscription:{header:"Předplatné",subscribe:"Přihlásit se k odběru",unsubscribe:"Odhlásit odběr",editSubscription:"Upravit odběry",mySubscriptions:"Moje odběry"}},kanban:{resolutionDate:{overdue:"Po termínu",none:"Žádné datum",today:"Dnes",tomorrow:"Zítra",week:"Tento týden",future:"V budoucnu"},all:"Všechny",dnd:{unsupportedPromote:"Stav problémů nelze zvýšit přímo z „{currState}“ na „{state}“.",unsupportedDemote:"Stav problémů nelze snížit přímo z „{currState}“ na „{state}“.",cannotEditClosedIssues:"Některé problémy jsou již ve stavu „Dokončeno“ a nelze je aktualizovat.",placeholder:"Přetáhnout sem",notAllSameStatePromote:"Nelze zvýšit/snížit stav problémů, které nejsou ve stejném stavu."},warning:{closed:"Není vybrán filtr pro zobrazení problémů ve stavu „Dokončeno“.<br>Můžete jej aktivovat v předvolbách filtru."},tooltips:{chizu:"Kliknutím zobrazíte sloupec:<br> {title}",leftArrow:"Přejít na předchozí sloupec",rightArrow:"Přejít na další sloupec"}},filter:{title:"Filtrovat podle",session:{header:"Moje relace",title:"Zobrazit problémy v počtu {number}",nothing:"Nic v relaci"},owned:"V mém vlastnictví",assigned:"Přiřazeno mně",filterbyobject:{title:"Filtrovat podle objektu",placeholder:"Vyhledejte objekt, podle něhož chcete filtrovat",filterMessage:"Nebyl nalezen žádný výsledek",search:"Hledat",menu:{title:"Nabídka",settings:{title:"Nastavení",filterby:"Filtrovat podle",affectedItem:"Ovlivněná položka",resolvedItem:"Vyřešená položka",context:"Kontext",apply:"Použít",cancel:"Zrušit",issueCreation:"Vytvoření problému",createSetting:"Automaticky přidat vybraný objekt během vytváření problému"},information:"Informace",openwith:"Otevřít v programu"},dropNotSupported:"Tato operace přetažení není podporována."},others:{title:"Ostatní společnosti",reported:"Ve vlastnictví mé organizace",responsible:"Přiřazeno mé organizaci",contributed:"Kam přispívám",closed:"Dokončeno"}},columns:{selection:"",actionsColumn:"Akce",titleColumn:"Název",nameColumn:"Název",occurrenceColumn:"Cesta",stateColumn:"Stav dokončení",allColumn:"Všechny",validationColumn:"Stav ověření",descriptionColumn:"Popis",priorityColumn:"Priorita",contextsColumn:"Kontexty",reportedAgainstColumn:"Dotčené položky",resolvedByColumn:"Vyřešeno uživatelem",resolvedItemsColumn:"Vyřešené položky",assigneesColumn:"Nabyvatelé",originatorColumn:"Původce",ownerColumn:"Vlastník",coOwnersColumn:"Koordinátoři",contributorsColumn:"Přispěvatelé",informedUsersColumn:"Informovaní uživatelé",modifiedColumn:"Datum změny",revisionColumn:"Revize",isLastRevisionColumn:"Je nejnovější revize",typeColumn:"Typ",organizationColumn:"Organizace",collaborativeSpaceColumn:"Prostor pro spolupráci",reportingOrganizationColumn:"Organizace podávající hlášení",responsibleOrganizationColumn:"Odpovědná organizace",resolutionDateColumn:"Termín dokončení",actionTakenColumn:"Provedená akce",resolutionRecommendationColumn:"Doporučené rozlišení",resolutionStatementColumn:"Informace o dokončení",estimatedStartDateColumn:"Odhadované datum zahájení",estimatedEndDateColumn:"Odhadované datum ukončení",actualStartDateColumn:"Datum zahájení",actualEndDateColumn:"Skutečné koncové datum",createdColumn:"Datum vytvoření",attachmentsColumn:"Přílohy",escalationRequiredColumn:"Je vyžadována eskalace",approvalColumn:"Schválení",libraryColumn:"Knihovna",libraryClassColumn:"Třídy knihoven",completionTypeColumn:"Typ dokončení"},list:{expandOrCollapse:"Rozbalit/sbalit",hasRelated:"Ano ({number})",hasRelatedItems:"Ano",noRelated:"Ne"},related:{dialogTitle:"Odpojit objekt(y) v počtu {number} od {issues} problémů",confirmDetach:"Opravdu chcete odpojit vybrané objekty?",detach:"Odpojit",cancel:"Storno"},commands:{properties:"Vlastnosti",relationalExplorer:"Vztahy",collaborativeLifecycle:"Stav dokončení",compare:"Porovnat",detach:"Odebrat",attachments:"Přílohy",close:"Označit jako Dokončeno","delete":"Odstranit",duplicate:"Duplikovat",expandAll:"Rozbalit obsah",collapseAll:"Sbalit obsah",more:"Další",sizeColumnToFit:"Automaticky upravit šířku sloupce",clearSortOrder:"Vymazat předvolbu řazení",share:"Kopírovat odkaz",reopen:"Znovu otevřít",move:"Přesunout",open:{single:"Otevřít v programu",multiple:"Otevřít",reportedAgainst:"Dotčené položky",resolvedBy:"Vyřešeno uživatelem",resolvedItems:"Vyřešené položky",contexts:"Kontexty"},preview:"Náhled",edit:"Upravit",undoEdit:"Zrušit úpravu",update:"Aktualizovat",information:"Informace",download:"Stáhnout",approvalOn:"Schválení (ZAPNUTO)",approvalOff:"Schválení (VYPNUTO)"},tooltips:{reportedAgainst:"{number} ovlivněná položka",resolvedBy:"Vyřešených uživatelem: {number}",resolvedItems:"{number} vyřešených položek",contexts:"Kontextů: {number}",noReportedAgainst:"Není připojena žádná „ovlivněná položka“",noResolvedBy:"Není připojen žádný „vyřešený“",noResolvedItems:"Není připojena žádná „vyřešená položka“",noContext:"Není připojen žádný kontext",isLastRevision:"Toto je nejnovější revize",isNotLastRevision:"Tato revize není nejnovější",noIsLastRevision:"Nnepoužitelné",selectedIssues:"Počet vybraných problémů: {number}.",helper:"Kliknutím zobrazíte nápovědu k aplikaci „Issue Management“.",comments:"Komentářů: {number}",attachments:"Příloh: {number}",creationDate:"Otevřeno dne {date}.",resolutionDate:"Termín dokončení: {date}",assignees:"Přiřazení uživatelé ({number})",noAssignee:"Žádný přiřazený uživatel"},notifications:{refresh:"Problémy byly obnoveny.",attachSuccess:{reportedAgainst:"Úspěšně jste přidali {count} objektů do {issue} jako Ovlivněné položky.",resolvedBy:"Úspěšně jste přidali {count} objektů do {issue} jako položky Vyřešeno uživatelem.",resolvedItems:"Úspěšně jste přidali {count} objektů do {issue} jako Vyřešené položky.",contexts:"Úspěšně jste přidali {count} objektů do {issue} jako Kontexty.",attachments:"Úspěšně jste přidali {count} objektů do {issue} jako Přílohy."},detachSuccess:"Objekty byly úspěšně odpojeny.",serverError:"Došlo k chybě, obnovte stránku a zkuste to znovu.",serverWarning:"U těchto objektů probíhají serverové operace. Zkuste to znovu později."},preferences:{securityContext:"Přihlašovací údaje",tenant:"3DEXPERIENCE Platform",name:{title:"Název pomůcky","default":"Moje problémy"},defaultFilterForAll:{title:"Pokud není vybrán žádný filtr, měly by se zobrazené problémy shodovat s vašimi aktuálními přihlašovacími údaji",organizationAndProject:"Organizace a prostor pro spolupráci",organization:"Organizace",project:"Prostor pro spolupráci",policy:"Všechny dostupné problémy"},validation:"Přidáním ověřovacího procesu pro nové problémy vynutíte po provedení analýzy nebo kontroly schválení nebo odmítnutí rozšíření problému.",highlights:{soon:"Počet zbývajících dnů do data zobrazení výstrahy. Musí být viditelný sloupec Termín dokončení."},organizationFilter:"Zobrazit organizační filtry",tagger:"Kopírovat značky"},validation:{none:"Neuvedeno",loading:"Načítání informací o stavu ověření...",approved:"Zvýšení stavu problému bylo schváleno.",rejected:"Zvýšení stavu problému bylo zamítnuto.",inProgress:"Čeká se na ověření.",notStarted:"Proces ověření je aktivní."},"export":{exporting:"Probíhá export problémů, čekejte...",confirmation:{confirm:"Potvrdit",cancel:"Storno"},csv:{name:"IM_Export_"},pptx:{title:"Potvrdit export do PPTX",content:"Tato akce vyexportuje následující počet problémů: {number}, a může chvíli trvat. Chcete pokračovat?",name:"IM_Export_",exporting:"Probíhá export PPTX...",done:"Soubor PPTX byl exportován",failure:"Problémy nelze exportovat jako PPTX"},zip:{title:"Potvrdit export do ZIP",content:"Tato akce vyexportuje následující počet problémů: {number}, a může chvíli trvat. Chcete pokračovat?",name:"IM_Export_",primary:"primary-image.png",exporting:"Probíhá export ZIP...",images:"Stahování primárních obrázků...",documents:"Stahování dokumentů...",zipping:"Komprimování souborů...",done:"Soubor ZIP byl exportován"},exportingAll:"Export všech {number} problémů. Čekejte...",nothingToExport:"Žádné problémy k exportu.",failure:"Export se nezdařil, zkuste to znovu.",printTotalLabel:"Problémy"},dnd:{partiallyNotSupported:"Některé objekty nejsou podporovány.",notSupported:"Tento typ obsahu není podporován. K otevření tohoto typu obsahu použijte příslušnou aplikaci ze softwaru Compass.",onlyIssues:"Přetahovat lze pouze na problémy.",dialogTitle:"Přidat {number} objektů do {issue}",whereToDrop:"Kam chcete tyto objekty přidat?",alreadyAttached:"Tento objekt je již k problému připojen.",attach:"Přidat",cancel:"Storno",references:"Reference",instances:"Cesty"},tasks:{cancel:"Storno",cancelLabel:"Zadejte existující objekt vybraný z kompatibilní 3D aplikace, který chcete přidat."},facets:{attachments:{placeholder:"Toto zobrazení nepodporuje výběr více položek, vyberte pouze jeden problém, jehož přílohy chcete zobrazit."},comments:{placeholder:"Toto zobrazení nepodporuje výběr více položek, vyberte pouze jeden problém, jehož komentáře chcete zobrazit."},history:{placeholder:"Toto zobrazení nepodporuje výběr více položek, vyberte pouze jeden problém, jehož historii chcete zobrazit."},relations:{placeholder:"Toto zobrazení nepodporuje výběr více položek, vyberte pouze jeden problém, jehož vztahy chcete zobrazit."}},tagger:{waiting:{title:"Aplikuje se 6WTags...",label:"Vaše problémy budou filtrovány na základě předchozích 6WTags."},cancel:"Storno"},summaryview:"",multiTenants:{differentTenant:"Platforma byla změněna",mismatchTenant:"Nemáte požadovanou licenční roli pro přístup k problémům na platformě {tenant}.",mismatchTenantSharedTemplate:"Neshoda platformy. Tato sdílená šablona nebyla přidána do vašeho seznamu šablon."},approvals:{approvalEnabled:"Schválení problému povoleno",approvalDisabled:"Schválení problému zakázáno",approvalOn:"Zapnuto",approvalOff:"Vypnuto"},resolvedBy:{errorSameIssue:"Stejný objekt problému nelze přidat jako vyřešený."},issueManagementAppHeader:"Issue Management",issueManagementAppIntro:"K vytváření a správě problémů použijte Issue Management",welcomePanelQuickAccess:"Rychlý přístup",welcomePanelIssueManagementHeader:"Zahájit novou aktivitu",welcomePanelIssueManagement:"Moje problémy",welcomePanelIssueTemplate:"Moje šablony",createNewIssue:"Vytvořit nový problém",createNewTemplate:"Vytvořit novou šablonu",whatsNew:"Nové příspěvky",footer:"Část zápatí",issueSummaryLoading:"Probíhá načítání problémů, vyčkejte",templateSummaryLoading:"Probíhá načítání šablony, vyčkejte.",templateTitlePlaceholder:"Nejsou k dispozici žádné šablony k zobrazení.",templatePreferenceName:"Moje šablony",resetSession:"Resetovat relaci",emptyDataGridPlaceHolder:"",completionType:"Typ dokončení",Open:"Otevřeno",Cancelled:"Zrušeno",Resolved:"Vyřešeno",successPartial:"Operation is partially successfull",switchView:"Switch View"});define("DS/IssueManagement/assets/nls/IssueManagement_list",{columns:{instanceName:"Název instance",instanceMatrix:"Polohová matice",selection:"Výběr","ds6w:reserved":"Stav rezervace","ds6w:reservedBy":"Vlastník rezervace",hide_show:"Skrýt/zobrazit",find_in_ctx:"Najít v kontextu",tree:"Název","ds6wg:revision":"Oprava","ds6w:type":"Typ","ds6w:responsible":"Odpovědná osoba","ds6w:description":"Popis","ds6w:created":"Vytvořené časové razítko","ds6w:modified":"Upravené časové razítko","ds6w:identifier":"Identifikátor",thumbnail:"Miniatura","ds6w:policy":"Zásady spolupráce","ds6w:organizationResponsible":"Organizace","ds6w:project":"Prostor pro spolupráci",isDuplicated:"Duplikováno",isLastMinorRevision:"Není poslední revize",svg:"Náhled"},tooltip_reserved:"Rezervováno",tooltip_unreserved:"Rezervace zrušena",tooltip_thumbnail:"Kliknutím zobrazíte miniaturu",tooltip_true:"Pravda",tooltip_false:"Nepravda",exportMask:"Export do formátu CSV.",customize_title:"Přizpůsobit pohled stromového seznamu",PrintOptions_title:"Vybrat sloupce k tisku",PrintOptions_header:"Sloupec k tisku",PrintOptions_ok:"Tisk",ExportCSVOptions_title:"Vybrat sloupce k exportu",ExportCSVOptions_header:"Sloupec k exportu",ExportCSVOptions_ok:"Exportovat",reset:"Obnovit",ColumnVisibility_title:"Vybrat sloupce k zobrazení",ColumnVisibility_header:"Název sloupce",ColumnVisibility_color:"Barva",ColumnVisibility_ok:"OK",ColumnVisibility_cancel:"Uložit jako šablonu",treelistview_customization_selection:"Zaškrtávací políčka",treelistview_customization_hide_show:"Skrýt/zobrazit ve 3D",treelistview_customization_find_in_ctx:"Najít v kontextu",treelistview_customization_instanceName:"Název instance",treelistview_customization_instanceMatrix:"Polohová matice",treelistview_customization_thumbnail:"Zobrazit miniatury",treelistview_customization_svg:"Náhled",padcustomizeview_ColumnVisibility_title:"Přizpůsobení sloupce",padcustomizeview_PrintOptions_title:"Možnosti tisku",padcustomizeview_ExportCSVOptions_title:"Možnosti exportu",padcustomizeview_ColumnVisibility_instruction:"Zaškrtnutím políčka můžete skrýt nebo zobrazit sloupec",padcustomizeview_PrintOptions_instruction:"Zaškrtnutím políček vyberte sloupce, které chcete vytisknout",padcustomizeview_ExportCSVOptions_instruction:"Zaškrtnutím políček vyberte sloupce, které chcete exportovat",padcustomizeview_button_reset:"Obnovit",padcustomizeview_button_close:"Zavřít",padcustomizeview_button_save:"Uložit",padcustomizeview_button_cancel:"Storno",padcustomizeview_column_name_header:"Název sloupce",padcustomizeview_color_header:"Barva",padcustomizeview_apply_to_this_app:"Použít možnosti pouze pro tuto aplikaci",padcustomizeview_tooltip_show_or_hide:"Zobrazit nebo skrýt tento sloupec",padcustomizeview_tooltip_cannot_hide:"Tento sloupec nelze skrýt",padcustomizeview_tooltip_set_color:"Nastavit barvu tohoto sloupce",padcustomizeview_tooltip_apply_toggle:"Určuje, zda mají být změny použity i na jiné aplikace",PADColorView_content:"a",density:"Hustota",Comfortable:"Komfortní",ComfortableExplanation:"Přizpůsobení pro mobilní zařízení",Compact:"Kompaktní",CompactExplanation:"Přizpůsobení pro myš",more:"Další",colorPicker:{title:"Přidat vlastní barvu",addTitle:"Přidat",resetTitle:"Obnovit",OKtitle:"Uložit a použít",Canceltitle:"Storno",Resettitle:"Obnovit",preview:"Náhled",backgroundColor:"Barva pozadí",textColor:"Barva textu",titleCustom:"Přidat vlastní barvu"},colorView:{content:"a",checkmark:"&#x2714;"},PADFind_matchcase:"Rozlišovat malá a velká písmena",PADFind_wholeword:"Celé slovo",PADFind_close:"Zavřít"});