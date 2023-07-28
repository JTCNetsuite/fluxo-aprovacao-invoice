/**
 * @NApiVersion 2.1
 * @NModuleScope public
 */
define([],
    
    () => {

        return {
            FORM: {
                BTN_APROVAR: {
                    ID:'custpage_btn_aprovar',
                    LABEL: "Aprovar"
                },
                BTN_REPROVAR: {
                    ID:'custpage_btn_reprovar',
                    LABEL: 'Reprovar'
                }

            },
            INVOICE: {
                STATUS: 'approvalstatus'
            },

            PARAM_SCRIPT: {
                ID_PAPEIS: 'custscript_jtc_param_id_papeis'
            }
        }

    });
