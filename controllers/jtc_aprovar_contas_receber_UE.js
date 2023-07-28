/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define(['../models/jtc_aprovar_contas_receber_MSR'],

    (msr) => {
        /**
         * Defines the function definition that is executed before record is loaded.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @param {Form} scriptContext.form - Current form
         * @param {ServletRequest} scriptContext.request - HTTP request information sent from the browser for a client action only.
         * @since 2015.2
         */
        const beforeLoad = (scriptContext) => {
            try {
                if (scriptContext.type == "view")  {
                    msr.createButton(scriptContext.form,
                        "custpage_btn_aprovar",
                        "Aprovar",
                        scriptContext.newRecord,
                        "aprovarPedido("+scriptContext.newRecord.id+")"
                        )
                    ;
                    msr.createButton(scriptContext.form,
                        "custpage_btn_rejeitar",
                        "Rejeitar",
                        scriptContext.newRecord,
                        "reijeitarPedido("+scriptContext.newRecord.id+")"
                    );

                }

            } catch(e) {
                log.error('beforeLoad', e);
            }
        }

        /**
         * Defines the function definition that is executed before record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const beforeSubmit = (scriptContext) => {

        }

        /**
         * Defines the function definition that is executed after record is submitted.
         * @param {Object} scriptContext
         * @param {Record} scriptContext.newRecord - New record
         * @param {Record} scriptContext.oldRecord - Old record
         * @param {string} scriptContext.type - Trigger type; use values from the context.UserEventType enum
         * @since 2015.2
         */
        const afterSubmit = (scriptContext) => {

        }

        return {beforeLoad, beforeSubmit, afterSubmit}

    });
