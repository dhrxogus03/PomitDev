define("DS/ENOXArchitectureCommon/ENOXArchitectureCommon_it",{});define("DS/ENOXArchitectureCommon/assets/nls/ENOXArchitectureCommon",{label:{all:"Tutti","true":"Vero","false":"Falso",none:"Nessuno",name:"Nome",title:"Titolo",type:"Tipo",objects:"Oggetti",declared_in:"Dichiarato in",instance_title:"Titolo istanza",copy_attributes:"Copia attributi",select:"Seleziona",copy_successful:"È stato incollato correttamente",information:"Informazioni",attribute_name:"Nome attributo",instance:"(Istanza)",implementingref:"Implementazione in corso",implementedref:"Implementato da"},title:{IPProtection:"Protezione tramite IP",summary_paste_attributes:"Incolla riepilogo attributi",search:"Seleziona un elemento",error_details:"Di seguito sono riportati i dettagli dell'errore:"},ph:{title:"Immetti un titolo"},action:{create:"Crea",copy:"Copia",close:"Chiudi",compare:"Confronta",revisions:"Revisioni",relations:"Relazioni",maturity:"Maturità",duplicate:"Duplica",open_with:"Apri con",move_to:"Sposta in",share:"Condividi",lock:"Blocca",unlock:"Sblocca","export":"Esporta",reparent:"Associa con un nuovo elemento padre",expand:"Espandi",expand_one_level:"Espandi un livello",expand_two_level:"Espandi due livelli",expand_all:"Espandi tutto",collapse_all:"Comprimi tutto",information:"Informazioni",create_and_open:"Crea e apri",create_and_close:"Crea e chiudi",create_and_replace:"Crea e sostituisci",detach:"Scollega"},message:{creating:"Creazione in corso...",loading:"Caricamento in corso...",processing:"Elaborazione in corso...",bulkOperation_limitReached:"Sono stati scelti nodi oltre il limite presunto di {limit} per questa operazione e quindi l'elaborazione potrebbe richiedere alcuni minuti. Attendere."},groupingNode:{other:"Altri"},info:{no_match_in_filter:"Nessun oggetto corrisponde ai criteri"},warning:{indexed_data_filtered:"Il filtro viene applicato ai dati indicizzati",clear_filter:"Il filtro esistente applicato all'elemento è stato cancellato in quanto non è stato salvato.",filter_only_indexed_mode:"La funzione filtro è disponibile solo quando si è sull'accelerazione dell'indice",bulkOperation_limit_reached:"Sono stati scelti nodi oltre il limite presunto di {limit} per questa operazione e quindi l'elaborazione potrebbe richiedere alcuni minuti. Attendere.",expand_multiLvl_multiSelect:"È stato scelto più di un Riferimento per l'espansione multilivello. Il recupero di dati completi potrebbe richiedere un po' di tempo. Attendere.",expand_largeData_warning:"Questa azione Espandi contiene più di 1000 dati figli da recuperare. L'elaborazione potrebbe richiedere alcuni minuti. Attendere. "},error:{header:"Errore",create_item:"Impossibile creare l'elemento",get_customFields:"Impossibile ottenere i campi personalizzati per l'elemento {title}",req_field_subtitle:"{field} è obbligatorio",req_field:"Campo obbligatorio mancante",mandatory_field_title:"Il campo del titolo è obbligatorio, inserire un valore",no_modification_possible:"Non è possibile apportare modifiche",modification_not_allowed:"Verificare che la maturità dell'oggetto o le credenziali e le autorizzazioni consentano di modificarlo.",too_long_field_title:"Non è possibile eseguire questa operazione di modifica.\n\nIl {fieldName} non può essere più lungo di {maxLength} caratteri.",action_unavailable_in_release:"Azione non disponibile nel contesto di un elemento Rilasciato/Obsoleto",get_structure:"Impossibile recuperare la Struttura di riferimento logico poiché i servizi correlati non sono disponibili",get_structure_media:"Impossibile recuperare la Struttura di riferimento logico poiché i servizi non sono disponibili. Verificare con l'amministratore se il supporto richiesto è installato",get_logitem:"Impossibile recuperare i dettagli del Riferimento logico poiché i servizi correlati non sono disponibili.",get_logitem_media:"Impossibile recuperare i dettagli del Riferimento logico poiché i servizi non sono disponibili. Verificare con l'amministratore se il supporto richiesto è installato",invalid_filter:"Filtro non valido per l'elemento di contesto",filter_colorize_predicate:"Il predicato scelto è un predicato personalizzato, pertanto la colorazione non è disponibile, oppure il predicato scelto non è nella vista del contenuto. In questo caso, aggiungere l'attributo tramite la gestione degli attributi per abilitare la colorazione.",request_timed_out:"La richiesta è scaduta!",generic_get_failed:"Impossibile ottenere i dati richiesti",creation:"Errore durante la creazione",add_item:"Impossibile aggiungere l'elemento",copy_all_attributes_failed:"Operazione Incolla di questo attributo non riuscita a causa di altri errori durante l'incollaggio",copy_attributes_failed:"Copia attributi non riuscita",copy_attribute_on_extension_failed:"Operazione Incolla di questo attributo non riuscita. Il motivo può essere che le estensioni corrispondenti non sono state aggiunte.",copy_attribute_on_type_failed:"Operazione Incolla di questo attributo non riuscita perché non appartiene al tipo selezionato.",copy_attribute_classif_failed:"Operazione Incolla di questo attributo non riuscita. Verificare che il Riferimento logico di destinazione sia assegnato con l'attributo classificato.",copy_attribute_equal_values_failed:"Operazione Incolla di questo attributo non riuscita. Verificare che il valore dell'attributo del Riferimento logico di origine e di destinazione sia diverso.",copy_attribute_failed_not_allowed:"Operazione Incolla di questo attributo non riuscita. Verificare che la maturità dell'oggetto o le credenziali e le autorizzazioni consentano di copiarlo.",create_refref_link:"Impossibile creare un Riferimento ai collegamenti Riferimento",inst_detach:"Non è possibile eseguire l'operazione 'Scollega riferimento logico' sui padri seguenti: "},success:{add:"Aggiunta riuscita",replace:"Sostituito con successo",create:"Creazione riuscita",msg_create:" è stato creato",msg_add:"Quanto segue è stato aggiunto correttamente: ",create_log_ref:"Riferimento logico creato con successo",copy_attributes:"Attributi copiati",msg_create_ref2ref:"Rif a Rif Relazione implementazione creata con successo",summary_paste_attributes_export:"Riepilogo di Incolla attributi esportato con successo",inst_detach:"Lo scollegamento delle istanze dei seguenti padri è riuscito: "}});define("DS/ENOXArchitectureCommon/assets/nls/LogicalReferenceNLS",{label:{},title:{},ph:{},action:{add_new:"Nuovo riferimento logico"},message:{confirm_detach_instance:"Scollegare le istanze selezionate?",confirm_reparent:"I riferimenti riportati di seguito verranno associati con un nuovo elemento padre in "},info:{},warning:{},error:{reparent_failed:"Associazione dei riferimenti con un nuovo elemento padre non riuscita",reparent_cyclic:"Questo nuovo padre è già stato salvato nell'elenco Riferimenti associazione come nuovo elemento padre. Cancellare la selezione esistente per evitare la struttura ciclica."},success:{reparent:"Associazione con un nuovo elemento padre riuscita"}});