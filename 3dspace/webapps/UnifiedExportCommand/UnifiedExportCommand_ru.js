define("DS/UnifiedExportCommand/UnifiedExportCommand_ru",{});define("DS/UnifiedExportCommand/assets/nls/IPTransferNLS",{"iptransfer.dialog.title":"Перенос","iptransfer.dialog.tbar.find":"Найти...","iptransfer.dialog.tbar.layout.tiles":"Вид плиток","iptransfer.dialog.tbar.layout.grid":"Вид сетки","iptransfer.dialog.footer.transfer":"Перенос","iptransfer.dialog.footer.transferring":"Перенос...","iptransfer.dialog.footer.cancel":"Отмена","iptransfer.dialog.footer.processing":"Расширение данных...","iptransfer.dialog.field.errortext":"Перенос не разрешен, так как выбранный совместный проект связан с несколькими организациями.","iptransfer.dialog.field.placeholder.choosetenant":"Выберите платформу","iptransfer.dialog.field.placeholder.choosedestination":"Выберите пространство совместной работы или расширенный совместный проект","iptransfer.dialog.field.placeholder.chooseorganization":"Выберите организацию","iptransfer.dialog.field.tenants.label":"Платформа","iptransfer.dialog.field.tenants.tooltip":"Справка по платформе","iptransfer.dialog.field.destinations.label":"Пространство совместной работы или расширенный совместный проект","iptransfer.dialog.field.destinations.tooltip":"Справка по совместному проекту","iptransfer.dialog.field.organizations.label":"Организация","iptransfer.dialog.field.organizations.help":"Справка по организации","iptransfer.loader.tenants":"Загрузка платформ...","iptransfer.loader.destinations":"Загрузка пространств совместной работы...","iptransfer.loader.organizations":"Загрузка организаций...","iptransfer.destination.type.collaboration":"Расширенный совместный проект","iptransfer.destination.type.space":"Пространство совместной работы","iptransfer.destination.view.grid.column.title":"Заголовок","iptransfer.destination.view.grid.column.company":"Компания","iptransfer.destination.view.grid.column.type":"Тип","iptransfer.alert.authorize-failure":"У вас нет роли Engineering Data Exchange Manager (EXH) для выполнения переноса.","iptransfer.alert.transfer-success":"Перенос запущен. Скоро вы получите уведомление о завершении.","iptransfer.alert.transfer-failure":"Сбой переноса.","iptransfer.alert.actions.login":"Login","iptransfer.alert.destination.not.reachable":"The selected platform <b>{0}</b> requires login to export your data.","iptransfer.alert.destination.not.reachable2":"Failed to load collaborative spaces from selected platform."});define("DS/UnifiedExportCommand/assets/nls/UnifiedExportCommandNLS",{"exchangecommand.methods.label.step":"STEP AP242","exchangecommand.methods.label.xcad":"Файлы CAD","exchangecommand.dialog.header":"Экспортировать как","exchangecommand.dialog.progressMessage.validated":"Содержимое проверяется...","exchangecommand.dialog.progressMessage.packaged":"Содержимое упаковывается...","exchangecommand.dialog.progressMessage.progress":"Выполняется запрос...","exchangecommand.dialog.footer.button.ok":"Дата обработки","exchangecommand.dialog.footer.button.save":"Экспорт","exchangecommand.dialog.footer.button.saving":"Выполняется экспорт...","exchangecommand.dialog.footer.button.cancel":"Отмена","exchangecommand.options.field.exportOutput":"Экспортировать в...","exchangecommand.options.field.exportOutput.help":"Выберите способ управления экспортом. 3DEXPERIENCE Platform предлагает несколько способов экспорта данных на основе имеющихся ролей. ","exchangecommand.options.field.title":"Заголовок","exchangecommand.options.field.title.placeholder":"Заголовок не может быть пустым","exchangecommand.options.field.title.error":"Заголовок не может содержать символы \\#@%*,;?<>[]|:./()","exchangecommand.options.field.version":"Версия","exchangecommand.options.field.format":"Формат","exchangecommand.options.field.expandDepth":"Глубина развертывания","exchangecommand.options.field.expandLevel":"Развернуть уровень","exchangecommand.options.field.expandLevel.expandAll":"Развернуть все","exchangecommand.options.field.expandLevel.expandNone":"Не разворачивать ни один","exchangecommand.options.field.expandLevel.help":"Выберите уровень расширения или введите недесятичный пользовательский уровень выше 5.","exchangecommand.options.field.expandLevel.customLevel":"Пользовательский уровень:","exchangecommand.options.placeholder.choosederived":"Выбрать производные форматы","exchangecommand.options.placeholder.choosenative":"Выбрать собственные форматы","exchangecommand.options.placeholder.chooseall":"Выбрать собственные и производные форматы","exchangecommand.options.field.engineeringformat.includeallnative":"Включить все собственные форматы","exchangecommand.options.field.engineeringformat.includeallderived":"Включить все производные форматы","exchangecommand.options.field.engineeringformat.includespecific":"Включить определенные форматы","exchangecommand.options.field.engineeringformat.includelatestformats":"Включить только актуальные производные форматы","exchangecommand.options.field.engineeringformat.includeallnative.help":"Включите этот параметр, чтобы получить все собственные форматы CAD, или отключите его, чтобы полностью исключить их. Даже после отключения можно указать требуемые форматы CAD в разделе 'Включить определенные форматы'.","exchangecommand.options.field.engineeringformat.includeallderived.help":"Включите этот параметр, чтобы получить все производные форматы, или отключите его, чтобы полностью исключить их. Даже после отключения можно указать требуемые производные форматы в разделе 'Включить определенные форматы'.","exchangecommand.options.field.engineeringformat.includespecific.help":"Выберите нужные собственные и производные форматы CAD в списке.","exchangecommand.options.field.engineeringformat.includelatestformats.help":"Включите этот параметр, чтобы получить только актуальные производные форматы.","exchangecommand.options.field.includeformatoptions":"Включить параметры: {0}","exchangecommand.options.placeholder.chooseoptions":"Выбрать параметры","exchangecommand.options.field.chooseoptions.customFilterMessage":"Форматы не найдены","exchangecommand.options.field.expandLevel.error":"Нет результатов","exchangecommand.cvfetch.failure.emptypayload":"Выбрано недостаточно допустимых объектов для использования зарегистрированных способов экспорта.","exchangecommand.options.field.cvexpand.error":"Невозможно начать экспорт, так как выбранные узлы не поддерживаются способом экспорта.","exchangecommand.options.field.cvfetch.noresult":"Выбранное содержимое не может быть экспортировано, так как оно еще не проиндексировано должным образом или может быть недействительно для любого из доступных способов экспорта.","exchangecommand.options.field.cvfetch.failure":"Выбранное содержимое не может быть экспортировано, так как оно еще не проиндексировано должным образом.","exchangecommand.options.field.moreoptions":"Больше параметров","exchangecommand.notification.expansionfailed":"Не удалось развернуть объекты.","exchangecommand.notification.expansionfailed.groupnotexpanded":"Свернутая или частично загруженная группа может дать неполный результат. Чтобы выполнить экспорт, разверните группу полностью.","exchangecommand.notification.expansionfailed.401":"Не удалось развернуть объекты из-за сбоя аутентификации.","exchangecommand.notification.expansionfailed.400":"Не удалось развернуть объекты из-за неправильного запроса","exchangecommand.notification.notallowed":"У вас недостаточно ролей или выбранных допустимых объектов для использования любого из зарегистрированных способов экспорта","exchangecommand.notification.rootlimit":"Одновременно можно экспортировать не более 8 сборок.","exchangecommand.notification.selectitemstoexport":"Выберите элементы для начала экспорта.","exchangecommand.notification.nostructre":"Структура продукта не найдена.","exchangecommand.notification.exportstarted.title":"Экспорт запущен","exchangecommand.notification.exportstarted.message":"Экспорт запущен. Скоро вы получите уведомление о завершении.","exchangecommand.notification.exportfailed.noresults":"Не удалось экспортировать выбранное содержимое, так как не найдено совпадений для примененных фильтров.","exchangecommand.notification.exportfailed.title":"Сбой экспорта","exchangecommand.notification.exportfailed.message":"Не удалось начать экспорт.","exchangecommand.notification.exportfailed.message2":"Не удалось начать экспорт, так как некоторые данные еще не проиндексированы.","exchangecommand.notification.exportfailed.message3":"Не удалось начать экспорт, так как некоторые данные, возможно, не разрешено экспортировать.","exchangecommand.notification.exportfailed.noresults2":"Не удалось экспортировать выбранное содержимое, так как оно не содержит необходимых данных.","exchangecommand.notification.exportfailed.noresults3":"Выбранное содержимое не может быть экспортировано, так как оно не было правильно проиндексировано, может не содержать необходимых данных или не поддерживается для экспорта.","exchangecommand.notification.exportfailed.unsupportedselection":"Некоторое или все выбранное содержимое не поддерживается для экспорта.","exchangecommand.notification.exportfailed.unsupportedselection.relationnode":"Выбранная структура содержит узлы взаимосвязей, которые не поддерживаются для экспорта."});