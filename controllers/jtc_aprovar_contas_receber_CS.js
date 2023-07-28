/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(['../models/jtc_aprovar_contas_receber_MSR'],

function(msr) {
    
    /**
     * Function to be executed after page is initialized.
     *
     * @param {Object} scriptContext
     * @param {Record} scriptContext.currentRecord - Current form record
     * @param {string} scriptContext.mode - The mode in which the record is being accessed (create, copy, or edit)
     *
     * @since 2015.2
     */
    function pageInit(scriptContext) {

    }

    const aprovarPedido = (new_record) => {
        msr.aprovarInvoice(new_record);
    }

    const reijeitarPedido = (new_record) => {
        msr.rejeitarInvoice(new_record);
    }


    return {
        pageInit: pageInit,
        aprovarPedido: aprovarPedido,
        reijeitarPedido: reijeitarPedido
    };
    
});
