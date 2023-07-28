/**
 * @NApiVersion 2.1
 * @NModuleScope public
 */
define(['../module/jtc_aprovar_contas_receber', 'N/record', "N/runtime"],
    
    (cts, record, runtime) => {

        
        const createButton = (form, id_btn, label_btn, new_record, fn_string) => {
            const status = new_record.getValue(cts.INVOICE.STATUS);
            const script = runtime.getCurrentScript();
            const id_papeis = String(script.getParameter({name: cts.PARAM_SCRIPT.ID_PAPEIS})).split(",");
            const currUser = runtime.getCurrentUser();
            const roleId = String(currUser.role);


            form.clientScriptModulePath = '../controllers/jtc_aprovar_contas_receber_CS.js';

            if (status == 1) {
                if (id_papeis.indexOf(roleId) != -1) {
                    const createButton = form.addButton({
                        id: id_btn,
                        label: label_btn,
                        functionName: fn_string
                    });
                }
            }
        }

        const aprovarInvoice = (idInvoice) => {

            const recordInvoice = record.load({
                type: record.Type.INVOICE,
                id: idInvoice,
                isDynamic: true
            });

            recordInvoice.setValue({
                fieldId: cts.INVOICE.STATUS,
                value: 2
            });

            recordInvoice.save({ignoreMandatoryFields: true});
            window.location.reload();

        }

        const rejeitarInvoice = (idInvoice) => {
            const recordInvoice = record.load({
                type: record.Type.INVOICE,
                id: idInvoice,
                isDynamic: true
            });

            recordInvoice.setValue({
                fieldId: cts.INVOICE.STATUS,
                value: 3
            });

            recordInvoice.save({ignoreMandatoryFields: true});
            window.location.reload();
        }


        return {createButton, aprovarInvoice, rejeitarInvoice}

    });
