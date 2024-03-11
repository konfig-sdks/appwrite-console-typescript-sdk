<div align="center">

[![Visit Appwrite](./header.png)](https://appwrite.io)

# [Appwrite](https://appwrite.io)<a id="appwrite"></a>

Appwrite backend as a service cuts up to 70% of the time and costs required for building a modern application. We abstract and simplify common development tasks behind a REST APIs, to help you develop your app in a fast and secure way. For full API documentation and tutorials go to [https://appwrite.io/docs](https://appwrite.io/docs)

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`appwriteconsole.account.addAuthenticatorApp`](#appwriteconsoleaccountaddauthenticatorapp)
  * [`appwriteconsole.account.completeEmailVerification`](#appwriteconsoleaccountcompleteemailverification)
  * [`appwriteconsole.account.completeMfaChallenge`](#appwriteconsoleaccountcompletemfachallenge)
  * [`appwriteconsole.account.completePasswordRecovery`](#appwriteconsoleaccountcompletepasswordrecovery)
  * [`appwriteconsole.account.confirmPhoneVerification`](#appwriteconsoleaccountconfirmphoneverification)
  * [`appwriteconsole.account.createAnonymousSession`](#appwriteconsoleaccountcreateanonymoussession)
  * [`appwriteconsole.account.createEmailPasswordSession`](#appwriteconsoleaccountcreateemailpasswordsession)
  * [`appwriteconsole.account.createEmailToken`](#appwriteconsoleaccountcreateemailtoken)
  * [`appwriteconsole.account.createEmailVerification`](#appwriteconsoleaccountcreateemailverification)
  * [`appwriteconsole.account.createJWT`](#appwriteconsoleaccountcreatejwt)
  * [`appwriteconsole.account.createMagicUrlToken`](#appwriteconsoleaccountcreatemagicurltoken)
  * [`appwriteconsole.account.createMfaChallenge`](#appwriteconsoleaccountcreatemfachallenge)
  * [`appwriteconsole.account.createNewUser`](#appwriteconsoleaccountcreatenewuser)
  * [`appwriteconsole.account.createOAuth2Session`](#appwriteconsoleaccountcreateoauth2session)
  * [`appwriteconsole.account.createOAuth2Token`](#appwriteconsoleaccountcreateoauth2token)
  * [`appwriteconsole.account.createPasswordRecovery`](#appwriteconsoleaccountcreatepasswordrecovery)
  * [`appwriteconsole.account.createPhoneToken`](#appwriteconsoleaccountcreatephonetoken)
  * [`appwriteconsole.account.createPushTarget`](#appwriteconsoleaccountcreatepushtarget)
  * [`appwriteconsole.account.createSessionFromToken`](#appwriteconsoleaccountcreatesessionfromtoken)
  * [`appwriteconsole.account.deleteAuthenticatorById`](#appwriteconsoleaccountdeleteauthenticatorbyid)
  * [`appwriteconsole.account.deleteIdentityById`](#appwriteconsoleaccountdeleteidentitybyid)
  * [`appwriteconsole.account.deletePushTarget`](#appwriteconsoleaccountdeletepushtarget)
  * [`appwriteconsole.account.deleteSessions`](#appwriteconsoleaccountdeletesessions)
  * [`appwriteconsole.account.deleteUser`](#appwriteconsoleaccountdeleteuser)
  * [`appwriteconsole.account.extendSessionLength`](#appwriteconsoleaccountextendsessionlength)
  * [`appwriteconsole.account.generateRecoveryCodes`](#appwriteconsoleaccountgeneraterecoverycodes)
  * [`appwriteconsole.account.getMfaRecoveryCodes`](#appwriteconsoleaccountgetmfarecoverycodes)
  * [`appwriteconsole.account.getPrefsOperation`](#appwriteconsoleaccountgetprefsoperation)
  * [`appwriteconsole.account.getSession`](#appwriteconsoleaccountgetsession)
  * [`appwriteconsole.account.getUser`](#appwriteconsoleaccountgetuser)
  * [`appwriteconsole.account.listIdentities`](#appwriteconsoleaccountlistidentities)
  * [`appwriteconsole.account.listMfaFactors`](#appwriteconsoleaccountlistmfafactors)
  * [`appwriteconsole.account.listSessions`](#appwriteconsoleaccountlistsessions)
  * [`appwriteconsole.account.listUserLogs`](#appwriteconsoleaccountlistuserlogs)
  * [`appwriteconsole.account.logoutSession`](#appwriteconsoleaccountlogoutsession)
  * [`appwriteconsole.account.regenerateMfaRecoveryCodes`](#appwriteconsoleaccountregeneratemfarecoverycodes)
  * [`appwriteconsole.account.sendVerificationSms`](#appwriteconsoleaccountsendverificationsms)
  * [`appwriteconsole.account.updateEmailAddress`](#appwriteconsoleaccountupdateemailaddress)
  * [`appwriteconsole.account.updateMagicUrlSession`](#appwriteconsoleaccountupdatemagicurlsession)
  * [`appwriteconsole.account.updateMfaStatus`](#appwriteconsoleaccountupdatemfastatus)
  * [`appwriteconsole.account.updateName`](#appwriteconsoleaccountupdatename)
  * [`appwriteconsole.account.updatePassword`](#appwriteconsoleaccountupdatepassword)
  * [`appwriteconsole.account.updatePhone`](#appwriteconsoleaccountupdatephone)
  * [`appwriteconsole.account.updatePhoneSession`](#appwriteconsoleaccountupdatephonesession)
  * [`appwriteconsole.account.updatePrefsOperation`](#appwriteconsoleaccountupdateprefsoperation)
  * [`appwriteconsole.account.updatePushTarget`](#appwriteconsoleaccountupdatepushtarget)
  * [`appwriteconsole.account.updateStatus`](#appwriteconsoleaccountupdatestatus)
  * [`appwriteconsole.account.verifyAuthenticator`](#appwriteconsoleaccountverifyauthenticator)
  * [`appwriteconsole.assistant.askQuery`](#appwriteconsoleassistantaskquery)
  * [`appwriteconsole.avatars.generateQrCode`](#appwriteconsoleavatarsgenerateqrcode)
  * [`appwriteconsole.avatars.getBrowserIcon`](#appwriteconsoleavatarsgetbrowsericon)
  * [`appwriteconsole.avatars.getCreditCardIcon`](#appwriteconsoleavatarsgetcreditcardicon)
  * [`appwriteconsole.avatars.getFavicon`](#appwriteconsoleavatarsgetfavicon)
  * [`appwriteconsole.avatars.getFlagByCode`](#appwriteconsoleavatarsgetflagbycode)
  * [`appwriteconsole.avatars.getImageUrlAndCrop`](#appwriteconsoleavatarsgetimageurlandcrop)
  * [`appwriteconsole.avatars.getUserInitials`](#appwriteconsoleavatarsgetuserinitials)
  * [`appwriteconsole.console.listVariables`](#appwriteconsoleconsolelistvariables)
  * [`appwriteconsole.databases.createBooleanAttribute`](#appwriteconsoledatabasescreatebooleanattribute)
  * [`appwriteconsole.databases.createCollection`](#appwriteconsoledatabasescreatecollection)
  * [`appwriteconsole.databases.createDatetimeAttribute`](#appwriteconsoledatabasescreatedatetimeattribute)
  * [`appwriteconsole.databases.createDocument`](#appwriteconsoledatabasescreatedocument)
  * [`appwriteconsole.databases.createEmailAttribute`](#appwriteconsoledatabasescreateemailattribute)
  * [`appwriteconsole.databases.createEnumAttribute`](#appwriteconsoledatabasescreateenumattribute)
  * [`appwriteconsole.databases.createFloatAttribute`](#appwriteconsoledatabasescreatefloatattribute)
  * [`appwriteconsole.databases.createIndexOnAttributes`](#appwriteconsoledatabasescreateindexonattributes)
  * [`appwriteconsole.databases.createIntegerAttribute`](#appwriteconsoledatabasescreateintegerattribute)
  * [`appwriteconsole.databases.createIpAttribute`](#appwriteconsoledatabasescreateipattribute)
  * [`appwriteconsole.databases.createNewDatabase`](#appwriteconsoledatabasescreatenewdatabase)
  * [`appwriteconsole.databases.createRelationshipAttribute`](#appwriteconsoledatabasescreaterelationshipattribute)
  * [`appwriteconsole.databases.createStringAttribute`](#appwriteconsoledatabasescreatestringattribute)
  * [`appwriteconsole.databases.createUrlAttribute`](#appwriteconsoledatabasescreateurlattribute)
  * [`appwriteconsole.databases.deleteAttributeById`](#appwriteconsoledatabasesdeleteattributebyid)
  * [`appwriteconsole.databases.deleteById`](#appwriteconsoledatabasesdeletebyid)
  * [`appwriteconsole.databases.deleteCollectionById`](#appwriteconsoledatabasesdeletecollectionbyid)
  * [`appwriteconsole.databases.deleteDocumentById`](#appwriteconsoledatabasesdeletedocumentbyid)
  * [`appwriteconsole.databases.deleteIndexByKey`](#appwriteconsoledatabasesdeleteindexbykey)
  * [`appwriteconsole.databases.getAttributeById`](#appwriteconsoledatabasesgetattributebyid)
  * [`appwriteconsole.databases.getById`](#appwriteconsoledatabasesgetbyid)
  * [`appwriteconsole.databases.getCollectionById`](#appwriteconsoledatabasesgetcollectionbyid)
  * [`appwriteconsole.databases.getCollectionUsageStats`](#appwriteconsoledatabasesgetcollectionusagestats)
  * [`appwriteconsole.databases.getDocumentById`](#appwriteconsoledatabasesgetdocumentbyid)
  * [`appwriteconsole.databases.getDocuments`](#appwriteconsoledatabasesgetdocuments)
  * [`appwriteconsole.databases.getIndexById`](#appwriteconsoledatabasesgetindexbyid)
  * [`appwriteconsole.databases.getUsageStats`](#appwriteconsoledatabasesgetusagestats)
  * [`appwriteconsole.databases.getUsageStats_0`](#appwriteconsoledatabasesgetusagestats_0)
  * [`appwriteconsole.databases.listAllDatabases`](#appwriteconsoledatabaseslistalldatabases)
  * [`appwriteconsole.databases.listAttributes`](#appwriteconsoledatabaseslistattributes)
  * [`appwriteconsole.databases.listCollectionIndexes`](#appwriteconsoledatabaseslistcollectionindexes)
  * [`appwriteconsole.databases.listCollectionLogs`](#appwriteconsoledatabaseslistcollectionlogs)
  * [`appwriteconsole.databases.listCollections`](#appwriteconsoledatabaseslistcollections)
  * [`appwriteconsole.databases.listDocumentLogs`](#appwriteconsoledatabaseslistdocumentlogs)
  * [`appwriteconsole.databases.listLogs`](#appwriteconsoledatabaseslistlogs)
  * [`appwriteconsole.databases.patchDateTimeAttribute`](#appwriteconsoledatabasespatchdatetimeattribute)
  * [`appwriteconsole.databases.updateBooleanAttribute`](#appwriteconsoledatabasesupdatebooleanattribute)
  * [`appwriteconsole.databases.updateById`](#appwriteconsoledatabasesupdatebyid)
  * [`appwriteconsole.databases.updateCollectionById`](#appwriteconsoledatabasesupdatecollectionbyid)
  * [`appwriteconsole.databases.updateDocumentById`](#appwriteconsoledatabasesupdatedocumentbyid)
  * [`appwriteconsole.databases.updateEmailAttribute`](#appwriteconsoledatabasesupdateemailattribute)
  * [`appwriteconsole.databases.updateEnumAttribute`](#appwriteconsoledatabasesupdateenumattribute)
  * [`appwriteconsole.databases.updateFloatAttribute`](#appwriteconsoledatabasesupdatefloatattribute)
  * [`appwriteconsole.databases.updateIntegerAttribute`](#appwriteconsoledatabasesupdateintegerattribute)
  * [`appwriteconsole.databases.updateIpAddressAttribute`](#appwriteconsoledatabasesupdateipaddressattribute)
  * [`appwriteconsole.databases.updateRelationshipAttribute`](#appwriteconsoledatabasesupdaterelationshipattribute)
  * [`appwriteconsole.databases.updateStringAttribute`](#appwriteconsoledatabasesupdatestringattribute)
  * [`appwriteconsole.databases.updateUrlAttribute`](#appwriteconsoledatabasesupdateurlattribute)
  * [`appwriteconsole.functions.createDeployment`](#appwriteconsolefunctionscreatedeployment)
  * [`appwriteconsole.functions.createFunction`](#appwriteconsolefunctionscreatefunction)
  * [`appwriteconsole.functions.createVariable`](#appwriteconsolefunctionscreatevariable)
  * [`appwriteconsole.functions.deleteDeployment`](#appwriteconsolefunctionsdeletedeployment)
  * [`appwriteconsole.functions.deleteFunctionById`](#appwriteconsolefunctionsdeletefunctionbyid)
  * [`appwriteconsole.functions.deleteVariableById`](#appwriteconsolefunctionsdeletevariablebyid)
  * [`appwriteconsole.functions.downloadDeploymentContents`](#appwriteconsolefunctionsdownloaddeploymentcontents)
  * [`appwriteconsole.functions.getById`](#appwriteconsolefunctionsgetbyid)
  * [`appwriteconsole.functions.getDeploymentById`](#appwriteconsolefunctionsgetdeploymentbyid)
  * [`appwriteconsole.functions.getExecutionLog`](#appwriteconsolefunctionsgetexecutionlog)
  * [`appwriteconsole.functions.getFunctionUsage`](#appwriteconsolefunctionsgetfunctionusage)
  * [`appwriteconsole.functions.getUsageStats`](#appwriteconsolefunctionsgetusagestats)
  * [`appwriteconsole.functions.getVariableById`](#appwriteconsolefunctionsgetvariablebyid)
  * [`appwriteconsole.functions.listAll`](#appwriteconsolefunctionslistall)
  * [`appwriteconsole.functions.listDeployments`](#appwriteconsolefunctionslistdeployments)
  * [`appwriteconsole.functions.listExecutions`](#appwriteconsolefunctionslistexecutions)
  * [`appwriteconsole.functions.listRuntimes`](#appwriteconsolefunctionslistruntimes)
  * [`appwriteconsole.functions.listVariables`](#appwriteconsolefunctionslistvariables)
  * [`appwriteconsole.functions.retryBuild`](#appwriteconsolefunctionsretrybuild)
  * [`appwriteconsole.functions.triggerExecution`](#appwriteconsolefunctionstriggerexecution)
  * [`appwriteconsole.functions.updateById`](#appwriteconsolefunctionsupdatebyid)
  * [`appwriteconsole.functions.updateDeploymentByFunctionAndId`](#appwriteconsolefunctionsupdatedeploymentbyfunctionandid)
  * [`appwriteconsole.functions.updateVariableById`](#appwriteconsolefunctionsupdatevariablebyid)
  * [`appwriteconsole.graphql.executeMutation`](#appwriteconsolegraphqlexecutemutation)
  * [`appwriteconsole.graphql.executeMutation_0`](#appwriteconsolegraphqlexecutemutation_0)
  * [`appwriteconsole.health.certificatesQueueCount`](#appwriteconsolehealthcertificatesqueuecount)
  * [`appwriteconsole.health.checkAppwriteHttpServer`](#appwriteconsolehealthcheckappwritehttpserver)
  * [`appwriteconsole.health.checkAvStatus`](#appwriteconsolehealthcheckavstatus)
  * [`appwriteconsole.health.checkCacheStatus`](#appwriteconsolehealthcheckcachestatus)
  * [`appwriteconsole.health.checkDatabaseStatus`](#appwriteconsolehealthcheckdatabasestatus)
  * [`appwriteconsole.health.checkLocalStorage`](#appwriteconsolehealthchecklocalstorage)
  * [`appwriteconsole.health.checkQueueStatus`](#appwriteconsolehealthcheckqueuestatus)
  * [`appwriteconsole.health.checkStorageDevice`](#appwriteconsolehealthcheckstoragedevice)
  * [`appwriteconsole.health.functionsQueueCount`](#appwriteconsolehealthfunctionsqueuecount)
  * [`appwriteconsole.health.getBuildsQueue`](#appwriteconsolehealthgetbuildsqueue)
  * [`appwriteconsole.health.getDatabasesQueue`](#appwriteconsolehealthgetdatabasesqueue)
  * [`appwriteconsole.health.getFailedJobs`](#appwriteconsolehealthgetfailedjobs)
  * [`appwriteconsole.health.getMailsQueue`](#appwriteconsolehealthgetmailsqueue)
  * [`appwriteconsole.health.getMessagingQueue`](#appwriteconsolehealthgetmessagingqueue)
  * [`appwriteconsole.health.getMigrationsQueue`](#appwriteconsolehealthgetmigrationsqueue)
  * [`appwriteconsole.health.getQueueDeletes`](#appwriteconsolehealthgetqueuedeletes)
  * [`appwriteconsole.health.getQueueLogs`](#appwriteconsolehealthgetqueuelogs)
  * [`appwriteconsole.health.getQueueUsageMetrics`](#appwriteconsolehealthgetqueueusagemetrics)
  * [`appwriteconsole.health.getSslCertificate`](#appwriteconsolehealthgetsslcertificate)
  * [`appwriteconsole.health.getUsageDumpQueue`](#appwriteconsolehealthgetusagedumpqueue)
  * [`appwriteconsole.health.pubsubGet`](#appwriteconsolehealthpubsubget)
  * [`appwriteconsole.health.syncTimeWithNtp`](#appwriteconsolehealthsynctimewithntp)
  * [`appwriteconsole.health.webhooksQueueCount`](#appwriteconsolehealthwebhooksqueuecount)
  * [`appwriteconsole.locale.getUserLocaleDetails`](#appwriteconsolelocalegetuserlocaledetails)
  * [`appwriteconsole.locale.listCodes`](#appwriteconsolelocalelistcodes)
  * [`appwriteconsole.locale.listContinents`](#appwriteconsolelocalelistcontinents)
  * [`appwriteconsole.locale.listCountries`](#appwriteconsolelocalelistcountries)
  * [`appwriteconsole.locale.listCountriesPhones`](#appwriteconsolelocalelistcountriesphones)
  * [`appwriteconsole.locale.listCurrencies`](#appwriteconsolelocalelistcurrencies)
  * [`appwriteconsole.locale.listEUCountries`](#appwriteconsolelocalelisteucountries)
  * [`appwriteconsole.locale.listLanguages`](#appwriteconsolelocalelistlanguages)
  * [`appwriteconsole.messaging.createApnsProvider`](#appwriteconsolemessagingcreateapnsprovider)
  * [`appwriteconsole.messaging.createEmailMessage`](#appwriteconsolemessagingcreateemailmessage)
  * [`appwriteconsole.messaging.createFcmProvider`](#appwriteconsolemessagingcreatefcmprovider)
  * [`appwriteconsole.messaging.createMailgunProvider`](#appwriteconsolemessagingcreatemailgunprovider)
  * [`appwriteconsole.messaging.createMsgProvider`](#appwriteconsolemessagingcreatemsgprovider)
  * [`appwriteconsole.messaging.createNewTopic`](#appwriteconsolemessagingcreatenewtopic)
  * [`appwriteconsole.messaging.createPushNotification`](#appwriteconsolemessagingcreatepushnotification)
  * [`appwriteconsole.messaging.createSendgridProvider`](#appwriteconsolemessagingcreatesendgridprovider)
  * [`appwriteconsole.messaging.createSmsMessage`](#appwriteconsolemessagingcreatesmsmessage)
  * [`appwriteconsole.messaging.createSmtpProvider`](#appwriteconsolemessagingcreatesmtpprovider)
  * [`appwriteconsole.messaging.createSubscriber`](#appwriteconsolemessagingcreatesubscriber)
  * [`appwriteconsole.messaging.createTelesignProvider`](#appwriteconsolemessagingcreatetelesignprovider)
  * [`appwriteconsole.messaging.createTextmagicProvider`](#appwriteconsolemessagingcreatetextmagicprovider)
  * [`appwriteconsole.messaging.createTwilioProvider`](#appwriteconsolemessagingcreatetwilioprovider)
  * [`appwriteconsole.messaging.createVonageProvider`](#appwriteconsolemessagingcreatevonageprovider)
  * [`appwriteconsole.messaging.deleteMessage`](#appwriteconsolemessagingdeletemessage)
  * [`appwriteconsole.messaging.deleteProviderById`](#appwriteconsolemessagingdeleteproviderbyid)
  * [`appwriteconsole.messaging.deleteSubscriberById`](#appwriteconsolemessagingdeletesubscriberbyid)
  * [`appwriteconsole.messaging.deleteTopicById`](#appwriteconsolemessagingdeletetopicbyid)
  * [`appwriteconsole.messaging.getMessageById`](#appwriteconsolemessaginggetmessagebyid)
  * [`appwriteconsole.messaging.getProviderById`](#appwriteconsolemessaginggetproviderbyid)
  * [`appwriteconsole.messaging.getSubscriberById`](#appwriteconsolemessaginggetsubscriberbyid)
  * [`appwriteconsole.messaging.getTopicById`](#appwriteconsolemessaginggettopicbyid)
  * [`appwriteconsole.messaging.listAllMessages`](#appwriteconsolemessaginglistallmessages)
  * [`appwriteconsole.messaging.listMessageLogs`](#appwriteconsolemessaginglistmessagelogs)
  * [`appwriteconsole.messaging.listProviderLogs`](#appwriteconsolemessaginglistproviderlogs)
  * [`appwriteconsole.messaging.listProviders`](#appwriteconsolemessaginglistproviders)
  * [`appwriteconsole.messaging.listSubscriberLogs`](#appwriteconsolemessaginglistsubscriberlogs)
  * [`appwriteconsole.messaging.listSubscribers`](#appwriteconsolemessaginglistsubscribers)
  * [`appwriteconsole.messaging.listTargets`](#appwriteconsolemessaginglisttargets)
  * [`appwriteconsole.messaging.listTopicLogs`](#appwriteconsolemessaginglisttopiclogs)
  * [`appwriteconsole.messaging.listTopics`](#appwriteconsolemessaginglisttopics)
  * [`appwriteconsole.messaging.updateApnsProvider`](#appwriteconsolemessagingupdateapnsprovider)
  * [`appwriteconsole.messaging.updateEmailById`](#appwriteconsolemessagingupdateemailbyid)
  * [`appwriteconsole.messaging.updateFcmProvider`](#appwriteconsolemessagingupdatefcmprovider)
  * [`appwriteconsole.messaging.updateMailgunProvider`](#appwriteconsolemessagingupdatemailgunprovider)
  * [`appwriteconsole.messaging.updateProviderById`](#appwriteconsolemessagingupdateproviderbyid)
  * [`appwriteconsole.messaging.updatePushMessage`](#appwriteconsolemessagingupdatepushmessage)
  * [`appwriteconsole.messaging.updateSendgridProvider`](#appwriteconsolemessagingupdatesendgridprovider)
  * [`appwriteconsole.messaging.updateSmsMessageById`](#appwriteconsolemessagingupdatesmsmessagebyid)
  * [`appwriteconsole.messaging.updateSmtpProvider`](#appwriteconsolemessagingupdatesmtpprovider)
  * [`appwriteconsole.messaging.updateTelesignProvider`](#appwriteconsolemessagingupdatetelesignprovider)
  * [`appwriteconsole.messaging.updateTextmagicProvider`](#appwriteconsolemessagingupdatetextmagicprovider)
  * [`appwriteconsole.messaging.updateTopicById`](#appwriteconsolemessagingupdatetopicbyid)
  * [`appwriteconsole.messaging.updateTwilioProvider`](#appwriteconsolemessagingupdatetwilioprovider)
  * [`appwriteconsole.messaging.updateVonageProviderById`](#appwriteconsolemessagingupdatevonageproviderbyid)
  * [`appwriteconsole.migrations.createAppwriteMigration`](#appwriteconsolemigrationscreateappwritemigration)
  * [`appwriteconsole.migrations.createNHostMigration`](#appwriteconsolemigrationscreatenhostmigration)
  * [`appwriteconsole.migrations.deleteMigration`](#appwriteconsolemigrationsdeletemigration)
  * [`appwriteconsole.migrations.firebaseDataMigration`](#appwriteconsolemigrationsfirebasedatamigration)
  * [`appwriteconsole.migrations.firebaseOAuthMigrate`](#appwriteconsolemigrationsfirebaseoauthmigrate)
  * [`appwriteconsole.migrations.generateFirebaseReport`](#appwriteconsolemigrationsgeneratefirebasereport)
  * [`appwriteconsole.migrations.generateFirebaseReportOAuth`](#appwriteconsolemigrationsgeneratefirebasereportoauth)
  * [`appwriteconsole.migrations.generateNhostReport`](#appwriteconsolemigrationsgeneratenhostreport)
  * [`appwriteconsole.migrations.generateReportOnAppwriteData`](#appwriteconsolemigrationsgeneratereportonappwritedata)
  * [`appwriteconsole.migrations.generateSupabaseReport`](#appwriteconsolemigrationsgeneratesupabasereport)
  * [`appwriteconsole.migrations.getById`](#appwriteconsolemigrationsgetbyid)
  * [`appwriteconsole.migrations.listFirebaseProjects`](#appwriteconsolemigrationslistfirebaseprojects)
  * [`appwriteconsole.migrations.listMigrations`](#appwriteconsolemigrationslistmigrations)
  * [`appwriteconsole.migrations.migrateSupabaseData`](#appwriteconsolemigrationsmigratesupabasedata)
  * [`appwriteconsole.migrations.retryMigration`](#appwriteconsolemigrationsretrymigration)
  * [`appwriteconsole.migrations.revokeFirebaseAuthorization`](#appwriteconsolemigrationsrevokefirebaseauthorization)
  * [`appwriteconsole.project.createVariable`](#appwriteconsoleprojectcreatevariable)
  * [`appwriteconsole.project.deleteVariableById`](#appwriteconsoleprojectdeletevariablebyid)
  * [`appwriteconsole.project.getUsageStats`](#appwriteconsoleprojectgetusagestats)
  * [`appwriteconsole.project.listVariables`](#appwriteconsoleprojectlistvariables)
  * [`appwriteconsole.project.updateVariableById`](#appwriteconsoleprojectupdatevariablebyid)
  * [`appwriteconsole.project.variableDetails`](#appwriteconsoleprojectvariabledetails)
  * [`appwriteconsole.projects.createKey`](#appwriteconsoleprojectscreatekey)
  * [`appwriteconsole.projects.createNewProject`](#appwriteconsoleprojectscreatenewproject)
  * [`appwriteconsole.projects.createPlatform`](#appwriteconsoleprojectscreateplatform)
  * [`appwriteconsole.projects.createSmtpTest`](#appwriteconsoleprojectscreatesmtptest)
  * [`appwriteconsole.projects.createWebhook`](#appwriteconsoleprojectscreatewebhook)
  * [`appwriteconsole.projects.deleteKey`](#appwriteconsoleprojectsdeletekey)
  * [`appwriteconsole.projects.deletePlatform`](#appwriteconsoleprojectsdeleteplatform)
  * [`appwriteconsole.projects.deleteWebhook`](#appwriteconsoleprojectsdeletewebhook)
  * [`appwriteconsole.projects.enablePersonalDataCheck`](#appwriteconsoleprojectsenablepersonaldatacheck)
  * [`appwriteconsole.projects.get`](#appwriteconsoleprojectsget)
  * [`appwriteconsole.projects.getEmailTemplate`](#appwriteconsoleprojectsgetemailtemplate)
  * [`appwriteconsole.projects.getKey`](#appwriteconsoleprojectsgetkey)
  * [`appwriteconsole.projects.getPlatformById`](#appwriteconsoleprojectsgetplatformbyid)
  * [`appwriteconsole.projects.getSmsTemplate`](#appwriteconsoleprojectsgetsmstemplate)
  * [`appwriteconsole.projects.getWebhook`](#appwriteconsoleprojectsgetwebhook)
  * [`appwriteconsole.projects.listKeys`](#appwriteconsoleprojectslistkeys)
  * [`appwriteconsole.projects.listPlatforms`](#appwriteconsoleprojectslistplatforms)
  * [`appwriteconsole.projects.listProjects`](#appwriteconsoleprojectslistprojects)
  * [`appwriteconsole.projects.listWebhooks`](#appwriteconsoleprojectslistwebhooks)
  * [`appwriteconsole.projects.removeById`](#appwriteconsoleprojectsremovebyid)
  * [`appwriteconsole.projects.resetEmailTemplate`](#appwriteconsoleprojectsresetemailtemplate)
  * [`appwriteconsole.projects.resetSmsTemplate`](#appwriteconsoleprojectsresetsmstemplate)
  * [`appwriteconsole.projects.updateAllApiStatus`](#appwriteconsoleprojectsupdateallapistatus)
  * [`appwriteconsole.projects.updateAllServiceStatus`](#appwriteconsoleprojectsupdateallservicestatus)
  * [`appwriteconsole.projects.updateApiStatus`](#appwriteconsoleprojectsupdateapistatus)
  * [`appwriteconsole.projects.updateAuthDuration`](#appwriteconsoleprojectsupdateauthduration)
  * [`appwriteconsole.projects.updateAuthMethodStatus`](#appwriteconsoleprojectsupdateauthmethodstatus)
  * [`appwriteconsole.projects.updateAuthPasswordDictionary`](#appwriteconsoleprojectsupdateauthpassworddictionary)
  * [`appwriteconsole.projects.updateAuthPasswordHistory`](#appwriteconsoleprojectsupdateauthpasswordhistory)
  * [`appwriteconsole.projects.updateCustomEmailTemplates`](#appwriteconsoleprojectsupdatecustomemailtemplates)
  * [`appwriteconsole.projects.updateDetail`](#appwriteconsoleprojectsupdatedetail)
  * [`appwriteconsole.projects.updateKey`](#appwriteconsoleprojectsupdatekey)
  * [`appwriteconsole.projects.updateMaxSessionsLimit`](#appwriteconsoleprojectsupdatemaxsessionslimit)
  * [`appwriteconsole.projects.updateOAuth`](#appwriteconsoleprojectsupdateoauth)
  * [`appwriteconsole.projects.updatePlatformById`](#appwriteconsoleprojectsupdateplatformbyid)
  * [`appwriteconsole.projects.updateServiceStatus`](#appwriteconsoleprojectsupdateservicestatus)
  * [`appwriteconsole.projects.updateSmsTemplate`](#appwriteconsoleprojectsupdatesmstemplate)
  * [`appwriteconsole.projects.updateSmtp`](#appwriteconsoleprojectsupdatesmtp)
  * [`appwriteconsole.projects.updateTeam`](#appwriteconsoleprojectsupdateteam)
  * [`appwriteconsole.projects.updateUserLimit`](#appwriteconsoleprojectsupdateuserlimit)
  * [`appwriteconsole.projects.updateWebhook`](#appwriteconsoleprojectsupdatewebhook)
  * [`appwriteconsole.projects.updateWebhookSignature`](#appwriteconsoleprojectsupdatewebhooksignature)
  * [`appwriteconsole.proxy.createNewRule`](#appwriteconsoleproxycreatenewrule)
  * [`appwriteconsole.proxy.deleteRuleById`](#appwriteconsoleproxydeleterulebyid)
  * [`appwriteconsole.proxy.getRuleById`](#appwriteconsoleproxygetrulebyid)
  * [`appwriteconsole.proxy.listRules`](#appwriteconsoleproxylistrules)
  * [`appwriteconsole.proxy.updateRuleVerificationStatus`](#appwriteconsoleproxyupdateruleverificationstatus)
  * [`appwriteconsole.storage.createBucket`](#appwriteconsolestoragecreatebucket)
  * [`appwriteconsole.storage.createFile`](#appwriteconsolestoragecreatefile)
  * [`appwriteconsole.storage.deleteBucketById`](#appwriteconsolestoragedeletebucketbyid)
  * [`appwriteconsole.storage.deleteFileById`](#appwriteconsolestoragedeletefilebyid)
  * [`appwriteconsole.storage.getBucket`](#appwriteconsolestoragegetbucket)
  * [`appwriteconsole.storage.getBucketUsageStats`](#appwriteconsolestoragegetbucketusagestats)
  * [`appwriteconsole.storage.getDownloadFile`](#appwriteconsolestoragegetdownloadfile)
  * [`appwriteconsole.storage.getFileById`](#appwriteconsolestoragegetfilebyid)
  * [`appwriteconsole.storage.getFilePreviewImage`](#appwriteconsolestoragegetfilepreviewimage)
  * [`appwriteconsole.storage.getFileView`](#appwriteconsolestoragegetfileview)
  * [`appwriteconsole.storage.getUsageStats`](#appwriteconsolestoragegetusagestats)
  * [`appwriteconsole.storage.listBuckets`](#appwriteconsolestoragelistbuckets)
  * [`appwriteconsole.storage.listFiles`](#appwriteconsolestoragelistfiles)
  * [`appwriteconsole.storage.updateBucketById`](#appwriteconsolestorageupdatebucketbyid)
  * [`appwriteconsole.storage.updateFileById`](#appwriteconsolestorageupdatefilebyid)
  * [`appwriteconsole.teams.createMembership`](#appwriteconsoleteamscreatemembership)
  * [`appwriteconsole.teams.createTeam`](#appwriteconsoleteamscreateteam)
  * [`appwriteconsole.teams.getById`](#appwriteconsoleteamsgetbyid)
  * [`appwriteconsole.teams.getFilteredTeams`](#appwriteconsoleteamsgetfilteredteams)
  * [`appwriteconsole.teams.getMembership`](#appwriteconsoleteamsgetmembership)
  * [`appwriteconsole.teams.getPrefs`](#appwriteconsoleteamsgetprefs)
  * [`appwriteconsole.teams.listLogs`](#appwriteconsoleteamslistlogs)
  * [`appwriteconsole.teams.listMemberships`](#appwriteconsoleteamslistmemberships)
  * [`appwriteconsole.teams.removeById`](#appwriteconsoleteamsremovebyid)
  * [`appwriteconsole.teams.removeMembership`](#appwriteconsoleteamsremovemembership)
  * [`appwriteconsole.teams.updateMembershipRoles`](#appwriteconsoleteamsupdatemembershiproles)
  * [`appwriteconsole.teams.updateMembershipStatus`](#appwriteconsoleteamsupdatemembershipstatus)
  * [`appwriteconsole.teams.updateNameById`](#appwriteconsoleteamsupdatenamebyid)
  * [`appwriteconsole.teams.updatePrefsById`](#appwriteconsoleteamsupdateprefsbyid)
  * [`appwriteconsole.users.createArgonUser`](#appwriteconsoleuserscreateargonuser)
  * [`appwriteconsole.users.createBcryptPassword`](#appwriteconsoleuserscreatebcryptpassword)
  * [`appwriteconsole.users.createMD5User`](#appwriteconsoleuserscreatemd5user)
  * [`appwriteconsole.users.createMessagingTarget`](#appwriteconsoleuserscreatemessagingtarget)
  * [`appwriteconsole.users.createMfaRecoveryCodes`](#appwriteconsoleuserscreatemfarecoverycodes)
  * [`appwriteconsole.users.createNewUser`](#appwriteconsoleuserscreatenewuser)
  * [`appwriteconsole.users.createScryptModifiedUser`](#appwriteconsoleuserscreatescryptmodifieduser)
  * [`appwriteconsole.users.createScryptUser`](#appwriteconsoleuserscreatescryptuser)
  * [`appwriteconsole.users.createSession`](#appwriteconsoleuserscreatesession)
  * [`appwriteconsole.users.createWithPHPass`](#appwriteconsoleuserscreatewithphpass)
  * [`appwriteconsole.users.createWithShaPassword`](#appwriteconsoleuserscreatewithshapassword)
  * [`appwriteconsole.users.deleteAuthenticator`](#appwriteconsoleusersdeleteauthenticator)
  * [`appwriteconsole.users.deleteById`](#appwriteconsoleusersdeletebyid)
  * [`appwriteconsole.users.deleteIdentityById`](#appwriteconsoleusersdeleteidentitybyid)
  * [`appwriteconsole.users.deleteSessionByUserIdAndSessionId`](#appwriteconsoleusersdeletesessionbyuseridandsessionid)
  * [`appwriteconsole.users.deleteSessionsById`](#appwriteconsoleusersdeletesessionsbyid)
  * [`appwriteconsole.users.deleteTargetMessaging`](#appwriteconsoleusersdeletetargetmessaging)
  * [`appwriteconsole.users.generateToken`](#appwriteconsoleusersgeneratetoken)
  * [`appwriteconsole.users.getLogsByUserId`](#appwriteconsoleusersgetlogsbyuserid)
  * [`appwriteconsole.users.getMembershipsById`](#appwriteconsoleusersgetmembershipsbyid)
  * [`appwriteconsole.users.getMfaRecoveryCodes`](#appwriteconsoleusersgetmfarecoverycodes)
  * [`appwriteconsole.users.getTarget`](#appwriteconsoleusersgettarget)
  * [`appwriteconsole.users.getUsageStats`](#appwriteconsoleusersgetusagestats)
  * [`appwriteconsole.users.getUserById`](#appwriteconsoleusersgetuserbyid)
  * [`appwriteconsole.users.getUserPrefsById`](#appwriteconsoleusersgetuserprefsbyid)
  * [`appwriteconsole.users.listFilteredUsers`](#appwriteconsoleuserslistfilteredusers)
  * [`appwriteconsole.users.listIdentities`](#appwriteconsoleuserslistidentities)
  * [`appwriteconsole.users.listMfaFactors`](#appwriteconsoleuserslistmfafactors)
  * [`appwriteconsole.users.listSessionsByUserId`](#appwriteconsoleuserslistsessionsbyuserid)
  * [`appwriteconsole.users.listTargets`](#appwriteconsoleuserslisttargets)
  * [`appwriteconsole.users.regenerateMfaRecoveryCodesByUserId`](#appwriteconsoleusersregeneratemfarecoverycodesbyuserid)
  * [`appwriteconsole.users.updateEmailById`](#appwriteconsoleusersupdateemailbyid)
  * [`appwriteconsole.users.updateEmailVerificationStatus`](#appwriteconsoleusersupdateemailverificationstatus)
  * [`appwriteconsole.users.updateLabelsByUserId`](#appwriteconsoleusersupdatelabelsbyuserid)
  * [`appwriteconsole.users.updateMessagingTarget`](#appwriteconsoleusersupdatemessagingtarget)
  * [`appwriteconsole.users.updateMfaStatus`](#appwriteconsoleusersupdatemfastatus)
  * [`appwriteconsole.users.updateNameById`](#appwriteconsoleusersupdatenamebyid)
  * [`appwriteconsole.users.updatePasswordByUserId`](#appwriteconsoleusersupdatepasswordbyuserid)
  * [`appwriteconsole.users.updatePhoneByUserId`](#appwriteconsoleusersupdatephonebyuserid)
  * [`appwriteconsole.users.updatePhoneVerification`](#appwriteconsoleusersupdatephoneverification)
  * [`appwriteconsole.users.updatePrefsById`](#appwriteconsoleusersupdateprefsbyid)
  * [`appwriteconsole.users.updateStatusByUserId`](#appwriteconsoleusersupdatestatusbyuserid)
  * [`appwriteconsole.vcs.authorizeExternalDeployment`](#appwriteconsolevcsauthorizeexternaldeployment)
  * [`appwriteconsole.vcs.createProviderRepository`](#appwriteconsolevcscreateproviderrepository)
  * [`appwriteconsole.vcs.deleteInstallation`](#appwriteconsolevcsdeleteinstallation)
  * [`appwriteconsole.vcs.detectRuntimeSettings`](#appwriteconsolevcsdetectruntimesettings)
  * [`appwriteconsole.vcs.getInstallationById`](#appwriteconsolevcsgetinstallationbyid)
  * [`appwriteconsole.vcs.getRepository`](#appwriteconsolevcsgetrepository)
  * [`appwriteconsole.vcs.listInstallations`](#appwriteconsolevcslistinstallations)
  * [`appwriteconsole.vcs.listProviderRepositories`](#appwriteconsolevcslistproviderrepositories)
  * [`appwriteconsole.vcs.listRepositoryBranches`](#appwriteconsolevcslistrepositorybranches)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Appwrite&serviceName=Console&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { AppwriteConsole } from "appwrite-console-typescript-sdk";

const appwriteconsole = new AppwriteConsole({
  // Defining the base path is optional and defaults to https://cloud.appwrite.io/v1
  // basePath: "https://cloud.appwrite.io/v1",
  jWT: "API_KEY",
  key: "API_KEY",
  locale: "API_KEY",
  mode: "API_KEY",
  project: "API_KEY",
});

const addAuthenticatorAppResponse =
  await appwriteconsole.account.addAuthenticatorApp({
    type: "totp",
  });

console.log(addAuthenticatorAppResponse);
```

## Reference<a id="reference"></a>


### `appwriteconsole.account.addAuthenticatorApp`<a id="appwriteconsoleaccountaddauthenticatorapp"></a>

Add an authenticator app to be used as an MFA factor. Verify the authenticator using the [verify authenticator](/docs/references/cloud/client-web/account#verifyAuthenticator) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addAuthenticatorAppResponse =
  await appwriteconsole.account.addAuthenticatorApp({
    type: "totp",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator. Must be `totp`

#### 🔄 Return<a id="🔄-return"></a>

[MfaType](./models/mfa-type.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.completeEmailVerification`<a id="appwriteconsoleaccountcompleteemailverification"></a>

Use this endpoint to complete the user email verification process. Use both the **userId** and **secret** parameters that were attached to your app URL to verify the user email ownership. If confirmed this route will return a 200 status code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeEmailVerificationResponse =
  await appwriteconsole.account.completeEmailVerification({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.completeMfaChallenge`<a id="appwriteconsoleaccountcompletemfachallenge"></a>

Complete the MFA challenge by providing the one-time password. Finish the process of MFA verification by providing the one-time password. To begin the flow, use [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeMfaChallengeResponse =
  await appwriteconsole.account.completeMfaChallenge({
    challengeId: "challengeId_example",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### challengeId: `string`<a id="challengeid-string"></a>

ID of the challenge.

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/challenge` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.completePasswordRecovery`<a id="appwriteconsoleaccountcompletepasswordrecovery"></a>

Use this endpoint to complete the user account password reset. Both the **userId** and **secret** arguments will be passed as query parameters to the redirect URL you have provided when sending your request to the [POST /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#createRecovery) endpoint.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completePasswordRecoveryResponse =
  await appwriteconsole.account.completePasswordRecovery({
    userId: "userId_example",
    secret: "secret_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid reset token.

##### password: `string`<a id="password-string"></a>

New user password. Must be between 8 and 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/recovery` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.confirmPhoneVerification`<a id="appwriteconsoleaccountconfirmphoneverification"></a>

Use this endpoint to complete the user phone verification process. Use the **userId** and **secret** that were sent to your user's phone number to verify the user email ownership. If confirmed this route will return a 200 status code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const confirmPhoneVerificationResponse =
  await appwriteconsole.account.confirmPhoneVerification({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification/phone` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createAnonymousSession`<a id="appwriteconsoleaccountcreateanonymoussession"></a>

Use this endpoint to allow a new user to register an anonymous account in your project. This route will also create a new session for the user. To allow the new user to convert an anonymous account to a normal account, you need to update its [email and password](https://appwrite.io/docs/references/cloud/client-web/account#updateEmail) or create an [OAuth2 session](https://appwrite.io/docs/references/cloud/client-web/account#CreateOAuth2Session).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAnonymousSessionResponse =
  await appwriteconsole.account.createAnonymousSession();
```

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/anonymous` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createEmailPasswordSession`<a id="appwriteconsoleaccountcreateemailpasswordsession"></a>

Allow the user to login into their account by providing a valid email and password combination. This route will create a new session for the user.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailPasswordSessionResponse =
  await appwriteconsole.account.createEmailPasswordSession({
    email: "email_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createEmailToken`<a id="appwriteconsoleaccountcreateemailtoken"></a>

Sends the user an email with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's email is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailTokenResponse = await appwriteconsole.account.createEmailToken(
  {
    userId: "userId_example",
    email: "email_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### phrase: `boolean`<a id="phrase-boolean"></a>

Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createEmailVerification`<a id="appwriteconsoleaccountcreateemailverification"></a>

Use this endpoint to send a verification message to your user email address to confirm they are the valid owners of that address. Both the **userId** and **secret** arguments will be passed as query parameters to the URL you have provided to be attached to the verification email. The provided URL should redirect the user back to your app and allow you to complete the verification process by verifying both the **userId** and **secret** parameters. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updateVerification). The verification link sent to the user's email address is valid for 7 days.

Please note that in order to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md), the only valid redirect URLs are the ones from domains you have set when adding your platforms in the console interface.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailVerificationResponse =
  await appwriteconsole.account.createEmailVerification({
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the verification email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createJWT`<a id="appwriteconsoleaccountcreatejwt"></a>

Use this endpoint to create a JSON Web Token. You can use the resulting JWT to authenticate on behalf of the current user when working with the Appwrite server-side API and SDKs. The JWT secret is valid for 15 minutes from its creation and will be invalid if the user will logout in that time frame.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createJWTResponse = await appwriteconsole.account.createJWT();
```

#### 🔄 Return<a id="🔄-return"></a>

[Jwt](./models/jwt.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/jwt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createMagicUrlToken`<a id="appwriteconsoleaccountcreatemagicurltoken"></a>

Sends the user an email with a secret key for creating a session. If the provided user ID has not been registered, a new user will be created. When the user clicks the link in the email, the user is redirected back to the URL you provided with the secret key and userId values attached to the URL query string. Use the query string parameters to submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The link sent to the user's email address is valid for 1 hour. If you are on a mobile device you can leave the URL parameter empty, so that the login completion will be handled by your Appwrite instance by default.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMagicUrlTokenResponse =
  await appwriteconsole.account.createMagicUrlToken({
    userId: "userId_example",
    email: "email_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the magic URL login. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### phrase: `boolean`<a id="phrase-boolean"></a>

Toggle for security phrase. If enabled, email will be send with a randomly generated phrase and the phrase will also be included in the response. Confirming phrases match increases the security of your authentication flow.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/magic-url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createMfaChallenge`<a id="appwriteconsoleaccountcreatemfachallenge"></a>

Begin the process of MFA verification after sign-in. Finish the flow with [updateMfaChallenge](/docs/references/cloud/client-web/account#updateMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMfaChallengeResponse =
  await appwriteconsole.account.createMfaChallenge({
    factor: "email",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### factor: `string`<a id="factor-string"></a>

Factor used for verification. Must be one of following: `email`, `phone`, `totp`, `recoveryCode`.

#### 🔄 Return<a id="🔄-return"></a>

[MfaChallenge](./models/mfa-challenge.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/challenge` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createNewUser`<a id="appwriteconsoleaccountcreatenewuser"></a>

Use this endpoint to allow a new user to register a new account in your project. After the user registration completes successfully, you can use the [/account/verfication](https://appwrite.io/docs/references/cloud/client-web/account#createVerification) route to start verifying the user email address. To allow the new user to login to their new account, you need to create a new [account session](https://appwrite.io/docs/references/cloud/client-web/account#createEmailSession).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUserResponse = await appwriteconsole.account.createNewUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

New user password. Must be between 8 and 256 chars.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createOAuth2Session`<a id="appwriteconsoleaccountcreateoauth2session"></a>

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed.

If there is already an active session, the new session will be attached to the logged-in account. If there are no active sessions, the server will attempt to look for a user with the same email address as the email received from the OAuth2 provider and attach the new session to the existing user. If no matching user is found - the server will create a new user.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOAuth2SessionResponse =
  await appwriteconsole.account.createOAuth2Session({
    provider: "amazon",
    success: "",
    failure: "",
    scopes: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `'amazon' | 'apple' | 'auth0' | 'authentik' | 'autodesk' | 'bitbucket' | 'bitly' | 'box' | 'dailymotion' | 'discord' | 'disqus' | 'dropbox' | 'etsy' | 'facebook' | 'github' | 'gitlab' | 'google' | 'linkedin' | 'microsoft' | 'notion' | 'oidc' | 'okta' | 'paypal' | 'paypalSandbox' | 'podio' | 'salesforce' | 'slack' | 'spotify' | 'stripe' | 'tradeshift' | 'tradeshiftBox' | 'twitch' | 'wordpress' | 'yahoo' | 'yammer' | 'yandex' | 'zoho' | 'zoom' | 'mock'`<a id="provider-amazon--apple--auth0--authentik--autodesk--bitbucket--bitly--box--dailymotion--discord--disqus--dropbox--etsy--facebook--github--gitlab--google--linkedin--microsoft--notion--oidc--okta--paypal--paypalsandbox--podio--salesforce--slack--spotify--stripe--tradeshift--tradeshiftbox--twitch--wordpress--yahoo--yammer--yandex--zoho--zoom--mock"></a>

OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.

##### success: `string`<a id="success-string"></a>

URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### failure: `string`<a id="failure-string"></a>

URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### scopes: `string`[]<a id="scopes-string"></a>

A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/oauth2/{provider}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createOAuth2Token`<a id="appwriteconsoleaccountcreateoauth2token"></a>

Allow the user to login to their account using the OAuth2 provider of their choice. Each OAuth2 provider should be enabled from the Appwrite console first. Use the success and failure arguments to provide a redirect URL's back to your app when login is completed. 

If authentication succeeds, `userId` and `secret` of a token will be appended to the success URL as query parameters. These can be used to create a new session using the [Create session](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createOAuth2TokenResponse =
  await appwriteconsole.account.createOAuth2Token({
    provider: "amazon",
    success: "",
    failure: "",
    scopes: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `'amazon' | 'apple' | 'auth0' | 'authentik' | 'autodesk' | 'bitbucket' | 'bitly' | 'box' | 'dailymotion' | 'discord' | 'disqus' | 'dropbox' | 'etsy' | 'facebook' | 'github' | 'gitlab' | 'google' | 'linkedin' | 'microsoft' | 'notion' | 'oidc' | 'okta' | 'paypal' | 'paypalSandbox' | 'podio' | 'salesforce' | 'slack' | 'spotify' | 'stripe' | 'tradeshift' | 'tradeshiftBox' | 'twitch' | 'wordpress' | 'yahoo' | 'yammer' | 'yandex' | 'zoho' | 'zoom' | 'mock'`<a id="provider-amazon--apple--auth0--authentik--autodesk--bitbucket--bitly--box--dailymotion--discord--disqus--dropbox--etsy--facebook--github--gitlab--google--linkedin--microsoft--notion--oidc--okta--paypal--paypalsandbox--podio--salesforce--slack--spotify--stripe--tradeshift--tradeshiftbox--twitch--wordpress--yahoo--yammer--yandex--zoho--zoom--mock"></a>

OAuth2 Provider. Currently, supported providers are: amazon, apple, auth0, authentik, autodesk, bitbucket, bitly, box, dailymotion, discord, disqus, dropbox, etsy, facebook, github, gitlab, google, linkedin, microsoft, notion, oidc, okta, paypal, paypalSandbox, podio, salesforce, slack, spotify, stripe, tradeshift, tradeshiftBox, twitch, wordpress, yahoo, yammer, yandex, zoho, zoom.

##### success: `string`<a id="success-string"></a>

URL to redirect back to your app after a successful login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### failure: `string`<a id="failure-string"></a>

URL to redirect back to your app after a failed login attempt.  Only URLs from hostnames in your project\'s platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### scopes: `string`[]<a id="scopes-string"></a>

A list of custom OAuth2 scopes. Check each provider internal docs for a list of supported scopes. Maximum of 100 scopes are allowed, each 4096 characters long.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/oauth2/{provider}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createPasswordRecovery`<a id="appwriteconsoleaccountcreatepasswordrecovery"></a>

Sends the user an email with a temporary secret key for password reset. When the user clicks the confirmation link he is redirected back to your app password reset URL with the secret key and email address values attached to the URL query string. Use the query string params to submit a request to the [PUT /account/recovery](https://appwrite.io/docs/references/cloud/client-web/account#updateRecovery) endpoint to complete the process. The verification link sent to the user's email address is valid for 1 hour.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPasswordRecoveryResponse =
  await appwriteconsole.account.createPasswordRecovery({
    email: "email_example",
    url: "url_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the recovery email. Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/recovery` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createPhoneToken`<a id="appwriteconsoleaccountcreatephonetoken"></a>

Sends the user an SMS with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [POST /v1/account/sessions/token](https://appwrite.io/docs/references/cloud/client-web/account#createSession) endpoint to complete the login process. The secret sent to the user's phone is valid for 15 minutes.

A user is limited to 10 active sessions at a time by default. [Learn more about session limits](https://appwrite.io/docs/authentication-security#limits).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPhoneTokenResponse = await appwriteconsole.account.createPhoneToken(
  {
    userId: "userId_example",
    phone: "phone_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/tokens/phone` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createPushTarget`<a id="appwriteconsoleaccountcreatepushtarget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPushTargetResponse = await appwriteconsole.account.createPushTarget(
  {
    targetId: "targetId_example",
    identifier: "identifier_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### targetId: `string`<a id="targetid-string"></a>

Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/targets/push` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.createSessionFromToken`<a id="appwriteconsoleaccountcreatesessionfromtoken"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionFromTokenResponse =
  await appwriteconsole.account.createSessionFromToken({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Secret of a token generated by login methods. For example, the `createMagicURLToken` or `createPhoneToken` methods.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.deleteAuthenticatorById`<a id="appwriteconsoleaccountdeleteauthenticatorbyid"></a>

Delete an authenticator for a user by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAuthenticatorByIdResponse =
  await appwriteconsole.account.deleteAuthenticatorById({
    type: "totp",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.deleteIdentityById`<a id="appwriteconsoleaccountdeleteidentitybyid"></a>

Delete an identity by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteIdentityByIdResponse =
  await appwriteconsole.account.deleteIdentityById({
    identityId: "identityId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identityId: `string`<a id="identityid-string"></a>

Identity ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/identities/{identityId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.deletePushTarget`<a id="appwriteconsoleaccountdeletepushtarget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePushTargetResponse = await appwriteconsole.account.deletePushTarget(
  {
    targetId: "targetId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/targets/{targetId}/push` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.deleteSessions`<a id="appwriteconsoleaccountdeletesessions"></a>

Delete all sessions from the user account and remove any sessions cookies from the end client.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSessionsResponse = await appwriteconsole.account.deleteSessions();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.deleteUser`<a id="appwriteconsoleaccountdeleteuser"></a>

Delete the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserResponse = await appwriteconsole.account.deleteUser();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.extendSessionLength`<a id="appwriteconsoleaccountextendsessionlength"></a>

Use this endpoint to extend a session's length. Extending a session is useful when session expiry is short. If the session was created using an OAuth provider, this endpoint refreshes the access token from the provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const extendSessionLengthResponse =
  await appwriteconsole.account.extendSessionLength({
    sessionId: "sessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to update the current device session.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.generateRecoveryCodes`<a id="appwriteconsoleaccountgeneraterecoverycodes"></a>

Generate recovery codes as backup for MFA flow. It's recommended to generate and show then immediately after user successfully adds their authehticator. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateRecoveryCodesResponse =
  await appwriteconsole.account.generateRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.getMfaRecoveryCodes`<a id="appwriteconsoleaccountgetmfarecoverycodes"></a>

Get recovery codes that can be used as backup for MFA flow. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to read recovery codes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMfaRecoveryCodesResponse =
  await appwriteconsole.account.getMfaRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.getPrefsOperation`<a id="appwriteconsoleaccountgetprefsoperation"></a>

Get the preferences as a key-value object for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPrefsOperationResponse =
  await appwriteconsole.account.getPrefsOperation();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.getSession`<a id="appwriteconsoleaccountgetsession"></a>

Use this endpoint to get a logged in user's session using a Session ID. Inputting 'current' will return the current session being used.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSessionResponse = await appwriteconsole.account.getSession({
  sessionId: "sessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to get the current device session.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.getUser`<a id="appwriteconsoleaccountgetuser"></a>

Get the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserResponse = await appwriteconsole.account.getUser();
```

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.listIdentities`<a id="appwriteconsoleaccountlistidentities"></a>

Get the list of identities for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listIdentitiesResponse = await appwriteconsole.account.listIdentities({
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry

#### 🔄 Return<a id="🔄-return"></a>

[IdentityList](./models/identity-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/identities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.listMfaFactors`<a id="appwriteconsoleaccountlistmfafactors"></a>

List the factors available on the account to be used as a MFA challange.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMfaFactorsResponse = await appwriteconsole.account.listMfaFactors();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaFactors](./models/mfa-factors.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/factors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.listSessions`<a id="appwriteconsoleaccountlistsessions"></a>

Get the list of active sessions across different devices for the currently logged in user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSessionsResponse = await appwriteconsole.account.listSessions();
```

#### 🔄 Return<a id="🔄-return"></a>

[SessionList](./models/session-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.listUserLogs`<a id="appwriteconsoleaccountlistuserlogs"></a>

Get the list of latest security activity logs for the currently logged in user. Each log returns user IP address, location and date and time of log.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listUserLogsResponse = await appwriteconsole.account.listUserLogs({
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.logoutSession`<a id="appwriteconsoleaccountlogoutsession"></a>

Logout the user. Use 'current' as the session ID to logout on this device, use a session ID to logout on another device. If you're looking to logout the user on all devices, use [Delete Sessions](https://appwrite.io/docs/references/cloud/client-web/account#deleteSessions) instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const logoutSessionResponse = await appwriteconsole.account.logoutSession({
  sessionId: "sessionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID. Use the string \'current\' to delete the current device session.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/{sessionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.regenerateMfaRecoveryCodes`<a id="appwriteconsoleaccountregeneratemfarecoverycodes"></a>

Regenerate recovery codes that can be used as backup for MFA flow. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method. An OTP challenge is required to regenreate recovery codes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const regenerateMfaRecoveryCodesResponse =
  await appwriteconsole.account.regenerateMfaRecoveryCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/recovery-codes` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.sendVerificationSms`<a id="appwriteconsoleaccountsendverificationsms"></a>

Use this endpoint to send a verification SMS to the currently logged in user. This endpoint is meant for use after updating a user's phone number using the [accountUpdatePhone](https://appwrite.io/docs/references/cloud/client-web/account#updatePhone) endpoint. Learn more about how to [complete the verification process](https://appwrite.io/docs/references/cloud/client-web/account#updatePhoneVerification). The verification code sent to the user's phone number is valid for 15 minutes.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendVerificationSmsResponse =
  await appwriteconsole.account.sendVerificationSms();
```

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/verification/phone` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updateEmailAddress`<a id="appwriteconsoleaccountupdateemailaddress"></a>

Update currently logged in user account email address. After changing user address, the user confirmation status will get reset. A new confirmation email is not sent automatically however you can use the send confirmation email endpoint again to send the confirmation email. For security measures, user password is required to complete this request.
This endpoint can also be used to convert an anonymous account to a normal one, by passing an email address and a new password.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailAddressResponse =
  await appwriteconsole.account.updateEmailAddress({
    email: "email_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/email` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updateMagicUrlSession`<a id="appwriteconsoleaccountupdatemagicurlsession"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMagicUrlSessionResponse =
  await appwriteconsole.account.updateMagicUrlSession({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/magic-url` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updateMfaStatus`<a id="appwriteconsoleaccountupdatemfastatus"></a>

Enable or disable MFA on an account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMfaStatusResponse = await appwriteconsole.account.updateMfaStatus({
  mfa: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mfa: `boolean`<a id="mfa-boolean"></a>

Enable or disable MFA.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updateName`<a id="appwriteconsoleaccountupdatename"></a>

Update currently logged in user account name.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameResponse = await appwriteconsole.account.updateName({
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/name` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updatePassword`<a id="appwriteconsoleaccountupdatepassword"></a>

Update currently logged in user password. For validation, user is required to pass in the new password, and the old password. For users created with OAuth, Team Invites and Magic URL, oldPassword is optional.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePasswordResponse = await appwriteconsole.account.updatePassword({
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

New user password. Must be at least 8 chars.

##### oldPassword: `string`<a id="oldpassword-string"></a>

Current user password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/password` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updatePhone`<a id="appwriteconsoleaccountupdatephone"></a>

Update the currently logged in user's phone number. After updating the phone number, the phone verification status will be reset. A confirmation SMS is not sent automatically, however you can use the [POST /account/verification/phone](https://appwrite.io/docs/references/cloud/client-web/account#createPhoneVerification) endpoint to send a confirmation SMS.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneResponse = await appwriteconsole.account.updatePhone({
  phone: "phone_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### password: `string`<a id="password-string"></a>

User password. Must be at least 8 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/phone` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updatePhoneSession`<a id="appwriteconsoleaccountupdatephonesession"></a>

Use this endpoint to create a session from token. Provide the **userId** and **secret** parameters from the successful response of authentication flows initiated by token creation. For example, magic URL and phone login.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneSessionResponse =
  await appwriteconsole.account.updatePhoneSession({
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### secret: `string`<a id="secret-string"></a>

Valid verification token.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/sessions/phone` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updatePrefsOperation`<a id="appwriteconsoleaccountupdateprefsoperation"></a>

Update currently logged in user account preferences. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsOperationResponse =
  await appwriteconsole.account.updatePrefsOperation({
    prefs: {},
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/prefs` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updatePushTarget`<a id="appwriteconsoleaccountupdatepushtarget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePushTargetResponse = await appwriteconsole.account.updatePushTarget(
  {
    targetId: "targetId_example",
    identifier: "identifier_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/targets/{targetId}/push` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.updateStatus`<a id="appwriteconsoleaccountupdatestatus"></a>

Block the currently logged in user account. Behind the scene, the user record is not deleted but permanently blocked from any access. To completely delete a user, use the Users API instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusResponse = await appwriteconsole.account.updateStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.account.verifyAuthenticator`<a id="appwriteconsoleaccountverifyauthenticator"></a>

Verify an authenticator app after adding it using the [add authenticator](/docs/references/cloud/client-web/account#addAuthenticator) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const verifyAuthenticatorResponse =
  await appwriteconsole.account.verifyAuthenticator({
    type: "totp",
    otp: "otp_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### otp: `string`<a id="otp-string"></a>

Valid verification token.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/account/mfa/authenticators/{type}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.assistant.askQuery`<a id="appwriteconsoleassistantaskquery"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const askQueryResponse = await appwriteconsole.assistant.askQuery({
  prompt: "prompt_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prompt: `string`<a id="prompt-string"></a>

Prompt. A string containing questions asked to the AI assistant.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/console/assistant` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.avatars.generateQrCode`<a id="appwriteconsoleavatarsgenerateqrcode"></a>

Converts a given plain text to a QR code image. You can use the query parameters to change the size and style of the resulting image.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateQrCodeResponse = await appwriteconsole.avatars.generateQrCode({
  text: "text_example",
  size: 400,
  margin: 1,
  download: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### text: `string`<a id="text-string"></a>

Plain text to be converted to QR code image.

##### size: `number`<a id="size-number"></a>

QR code size. Pass an integer between 1 to 1000. Defaults to 400.

##### margin: `number`<a id="margin-number"></a>

Margin from edge. Pass an integer between 0 to 10. Defaults to 1.

##### download: `boolean`<a id="download-boolean"></a>

Return resulting image with \'Content-Disposition: attachment \' headers for the browser to start downloading it. Pass 0 for no header, or 1 for otherwise. Default value is set to 0.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/qr` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.avatars.getBrowserIcon`<a id="appwriteconsoleavatarsgetbrowsericon"></a>

You can use this endpoint to show different browser icons to your users. The code argument receives the browser code as it appears in your user [GET /account/sessions](https://appwrite.io/docs/references/cloud/client-web/account#getSessions) endpoint. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBrowserIconResponse = await appwriteconsole.avatars.getBrowserIcon({
  code: "aa",
  width: 100,
  height: 100,
  quality: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'aa' | 'an' | 'ch' | 'ci' | 'cm' | 'cr' | 'ff' | 'sf' | 'mf' | 'ps' | 'oi' | 'om' | 'op' | 'true'`<a id="code-aa--an--ch--ci--cm--cr--ff--sf--mf--ps--oi--om--op--true"></a>

Browser Code.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/browsers/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.avatars.getCreditCardIcon`<a id="appwriteconsoleavatarsgetcreditcardicon"></a>

The credit card endpoint will return you the icon of the credit card provider you need. Use width, height and quality arguments to change the output settings.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCreditCardIconResponse =
  await appwriteconsole.avatars.getCreditCardIcon({
    code: "amex",
    width: 100,
    height: 100,
    quality: 100,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'amex' | 'argencard' | 'cabal' | 'censosud' | 'diners' | 'discover' | 'elo' | 'hipercard' | 'jcb' | 'mastercard' | 'naranja' | 'targeta-shopping' | 'union-china-pay' | 'visa' | 'mir' | 'maestro'`<a id="code-amex--argencard--cabal--censosud--diners--discover--elo--hipercard--jcb--mastercard--naranja--targeta-shopping--union-china-pay--visa--mir--maestro"></a>

Credit Card Code. Possible values: amex, argencard, cabal, censosud, diners, discover, elo, hipercard, jcb, mastercard, naranja, targeta-shopping, union-china-pay, visa, mir, maestro.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/credit-cards/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.avatars.getFavicon`<a id="appwriteconsoleavatarsgetfavicon"></a>

Use this endpoint to fetch the favorite icon (AKA favicon) of any remote website URL.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFaviconResponse = await appwriteconsole.avatars.getFavicon({
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Website URL which you want to fetch the favicon from.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/favicon` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.avatars.getFlagByCode`<a id="appwriteconsoleavatarsgetflagbycode"></a>

You can use this endpoint to show different country flags icons to your users. The code argument receives the 2 letter country code. Use width, height and quality arguments to change the output settings. Country codes follow the [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1) standard.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFlagByCodeResponse = await appwriteconsole.avatars.getFlagByCode({
  code: "af",
  width: 100,
  height: 100,
  quality: 100,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `'af' | 'ao' | 'al' | 'ad' | 'ae' | 'ar' | 'am' | 'ag' | 'au' | 'at' | 'az' | 'bi' | 'be' | 'bj' | 'bf' | 'bd' | 'bg' | 'bh' | 'bs' | 'ba' | 'by' | 'bz' | 'bo' | 'br' | 'bb' | 'bn' | 'bt' | 'bw' | 'cf' | 'ca' | 'ch' | 'cl' | 'cn' | 'ci' | 'cm' | 'cd' | 'cg' | 'co' | 'km' | 'cv' | 'cr' | 'cu' | 'cy' | 'cz' | 'de' | 'dj' | 'dm' | 'dk' | 'do' | 'dz' | 'ec' | 'eg' | 'er' | 'es' | 'ee' | 'et' | 'fi' | 'fj' | 'fr' | 'fm' | 'ga' | 'gb' | 'ge' | 'gh' | 'gn' | 'gm' | 'gw' | 'gq' | 'gr' | 'gd' | 'gt' | 'gy' | 'hn' | 'hr' | 'ht' | 'hu' | 'id' | 'in' | 'ie' | 'ir' | 'iq' | 'is' | 'il' | 'it' | 'jm' | 'jo' | 'jp' | 'kz' | 'ke' | 'kg' | 'kh' | 'ki' | 'kn' | 'kr' | 'kw' | 'la' | 'lb' | 'lr' | 'ly' | 'lc' | 'li' | 'lk' | 'ls' | 'lt' | 'lu' | 'lv' | 'ma' | 'mc' | 'md' | 'mg' | 'mv' | 'mx' | 'mh' | 'mk' | 'ml' | 'mt' | 'mm' | 'me' | 'mn' | 'mz' | 'mr' | 'mu' | 'mw' | 'my' | 'na' | 'ne' | 'ng' | 'ni' | 'nl' | 'false' | 'np' | 'nr' | 'nz' | 'om' | 'pk' | 'pa' | 'pe' | 'ph' | 'pw' | 'pg' | 'pl' | 'kp' | 'pt' | 'py' | 'qa' | 'ro' | 'ru' | 'rw' | 'sa' | 'sd' | 'sn' | 'sg' | 'sb' | 'sl' | 'sv' | 'sm' | 'so' | 'rs' | 'ss' | 'st' | 'sr' | 'sk' | 'si' | 'se' | 'sz' | 'sc' | 'sy' | 'td' | 'tg' | 'th' | 'tj' | 'tm' | 'tl' | 'to' | 'tt' | 'tn' | 'tr' | 'tv' | 'tz' | 'ug' | 'ua' | 'uy' | 'us' | 'uz' | 'va' | 'vc' | 've' | 'vn' | 'vu' | 'ws' | 'ye' | 'za' | 'zm' | 'zw'`<a id="code-af--ao--al--ad--ae--ar--am--ag--au--at--az--bi--be--bj--bf--bd--bg--bh--bs--ba--by--bz--bo--br--bb--bn--bt--bw--cf--ca--ch--cl--cn--ci--cm--cd--cg--co--km--cv--cr--cu--cy--cz--de--dj--dm--dk--do--dz--ec--eg--er--es--ee--et--fi--fj--fr--fm--ga--gb--ge--gh--gn--gm--gw--gq--gr--gd--gt--gy--hn--hr--ht--hu--id--in--ie--ir--iq--is--il--it--jm--jo--jp--kz--ke--kg--kh--ki--kn--kr--kw--la--lb--lr--ly--lc--li--lk--ls--lt--lu--lv--ma--mc--md--mg--mv--mx--mh--mk--ml--mt--mm--me--mn--mz--mr--mu--mw--my--na--ne--ng--ni--nl--false--np--nr--nz--om--pk--pa--pe--ph--pw--pg--pl--kp--pt--py--qa--ro--ru--rw--sa--sd--sn--sg--sb--sl--sv--sm--so--rs--ss--st--sr--sk--si--se--sz--sc--sy--td--tg--th--tj--tm--tl--to--tt--tn--tr--tv--tz--ug--ua--uy--us--uz--va--vc--ve--vn--vu--ws--ye--za--zm--zw"></a>

Country Code. ISO Alpha-2 country code format.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### quality: `number`<a id="quality-number"></a>

Image quality. Pass an integer between 0 to 100. Defaults to 100.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/flags/{code}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.avatars.getImageUrlAndCrop`<a id="appwriteconsoleavatarsgetimageurlandcrop"></a>

Use this endpoint to fetch a remote image URL and crop it to any image size you want. This endpoint is very useful if you need to crop and display remote images in your app or in case you want to make sure a 3rd party image is properly served using a TLS protocol.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 400x400px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getImageUrlAndCropResponse =
  await appwriteconsole.avatars.getImageUrlAndCrop({
    url: "url_example",
    width: 400,
    height: 400,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

Image URL which you want to crop.

##### width: `number`<a id="width-number"></a>

Resize preview image width, Pass an integer between 0 to 2000. Defaults to 400.

##### height: `number`<a id="height-number"></a>

Resize preview image height, Pass an integer between 0 to 2000. Defaults to 400.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/image` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.avatars.getUserInitials`<a id="appwriteconsoleavatarsgetuserinitials"></a>

Use this endpoint to show your user initials avatar icon on your website or app. By default, this route will try to print your logged-in user name or email initials. You can also overwrite the user name if you pass the 'name' parameter. If no name is given and no user is logged, an empty avatar will be returned.

You can use the color and background params to change the avatar colors. By default, a random theme will be selected. The random theme will persist for the user's initials when reloading the same theme will always return for the same initials.

When one dimension is specified and the other is 0, the image is scaled with preserved aspect ratio. If both dimensions are 0, the API provides an image at source quality. If dimensions are not specified, the default size of image returned is 100x100px.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserInitialsResponse = await appwriteconsole.avatars.getUserInitials({
  name: "",
  width: 500,
  height: 500,
  background: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Full Name. When empty, current user name or email will be used. Max length: 128 chars.

##### width: `number`<a id="width-number"></a>

Image width. Pass an integer between 0 to 2000. Defaults to 100.

##### height: `number`<a id="height-number"></a>

Image height. Pass an integer between 0 to 2000. Defaults to 100.

##### background: `string`<a id="background-string"></a>

Changes background color. By default a random color will be picked and stay will persistent to the given name.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/avatars/initials` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.console.listVariables`<a id="appwriteconsoleconsolelistvariables"></a>

Get all Environment Variables that are relevant for the console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVariablesResponse = await appwriteconsole.console.listVariables();
```

#### 🔄 Return<a id="🔄-return"></a>

[ConsoleVariables](./models/console-variables.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/console/variables` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createBooleanAttribute`<a id="appwriteconsoledatabasescreatebooleanattribute"></a>

Create a boolean attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBooleanAttributeResponse =
  await appwriteconsole.databases.createBooleanAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `boolean`<a id="default-boolean"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeBoolean](./models/attribute-boolean.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/boolean` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createCollection`<a id="appwriteconsoledatabasescreatecollection"></a>

Create a new Collection. Before using this route, you should create a new database resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createCollectionResponse =
  await appwriteconsole.databases.createCollection({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### collectionId: `string`<a id="collectionid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Collection name. Max length: 128 chars.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### documentSecurity: `boolean`<a id="documentsecurity-boolean"></a>

Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is collection enabled? When set to \\\'disabled\\\', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createDatetimeAttribute`<a id="appwriteconsoledatabasescreatedatetimeattribute"></a>

Create a date time attribute according to the ISO 8601 standard.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDatetimeAttributeResponse =
  await appwriteconsole.databases.createDatetimeAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for the attribute in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeDatetime](./models/attribute-datetime.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/datetime` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createDocument`<a id="appwriteconsoledatabasescreatedocument"></a>

Create a new Document. Before using this route, you should create a new collection resource using either a [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection) API or directly from your database console.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDocumentResponse = await appwriteconsole.databases.createDocument({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  documentId: "documentId_example",
  data: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### documentId: `string`<a id="documentid-string"></a>

Document ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### data: `object`<a id="data-object"></a>

Document data as JSON object.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection). Make sure to define attributes before creating documents.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createEmailAttribute`<a id="appwriteconsoledatabasescreateemailattribute"></a>

Create an email attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailAttributeResponse =
  await appwriteconsole.databases.createEmailAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEmail](./models/attribute-email.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createEnumAttribute`<a id="appwriteconsoledatabasescreateenumattribute"></a>

Create an enumeration attribute. The `elements` param acts as a white-list of accepted values for this attribute. 


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEnumAttributeResponse =
  await appwriteconsole.databases.createEnumAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    elements: ["elements_example"],
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### elements: `string`[]<a id="elements-string"></a>

Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEnum](./models/attribute-enum.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/enum` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createFloatAttribute`<a id="appwriteconsoledatabasescreatefloatattribute"></a>

Create a float attribute. Optionally, minimum and maximum values can be provided.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFloatAttributeResponse =
  await appwriteconsole.databases.createFloatAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeFloat](./models/attribute-float.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/float` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createIndexOnAttributes`<a id="appwriteconsoledatabasescreateindexonattributes"></a>

Creates an index on the attributes listed. Your index should include all the attributes you will query in a single request.
Attributes can be `key`, `fulltext`, and `unique`.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIndexOnAttributesResponse =
  await appwriteconsole.databases.createIndexOnAttributes({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    type: "key",
    attributes: ["attributes_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Index Key.

##### type: `string`<a id="type-string"></a>

Index type.

##### attributes: `string`[]<a id="attributes-string"></a>

Array of attributes to index. Maximum of 100 attributes are allowed, each 32 characters long.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### orders: `string`[]<a id="orders-string"></a>

Array of index orders. Maximum of 100 orders are allowed.

#### 🔄 Return<a id="🔄-return"></a>

[Index](./models/index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createIntegerAttribute`<a id="appwriteconsoledatabasescreateintegerattribute"></a>

Create an integer attribute. Optionally, minimum and maximum values can be provided.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIntegerAttributeResponse =
  await appwriteconsole.databases.createIntegerAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeInteger](./models/attribute-integer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/integer` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createIpAttribute`<a id="appwriteconsoledatabasescreateipattribute"></a>

Create IP address attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIpAttributeResponse =
  await appwriteconsole.databases.createIpAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeIp](./models/attribute-ip.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/ip` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createNewDatabase`<a id="appwriteconsoledatabasescreatenewdatabase"></a>

Create a new Database.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDatabaseResponse =
  await appwriteconsole.databases.createNewDatabase({
    databaseId: "databaseId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Database name. Max length: 128 chars.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is the database enabled? When set to \\\'disabled\\\', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Database](./models/database.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createRelationshipAttribute`<a id="appwriteconsoledatabasescreaterelationshipattribute"></a>

Create relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRelationshipAttributeResponse =
  await appwriteconsole.databases.createRelationshipAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    relatedCollectionId: "relatedCollectionId_example",
    type: "oneToOne",
    onDelete: "cascade",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### relatedCollectionId: `string`<a id="relatedcollectionid-string"></a>

Related Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### type: `string`<a id="type-string"></a>

Relation type

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### twoWay: `boolean`<a id="twoway-boolean"></a>

Is Two Way?

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### twoWayKey: `string`<a id="twowaykey-string"></a>

Two Way Attribute Key.

##### onDelete: `string`<a id="ondelete-string"></a>

Constraints option

#### 🔄 Return<a id="🔄-return"></a>

[AttributeRelationship](./models/attribute-relationship.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/relationship` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createStringAttribute`<a id="appwriteconsoledatabasescreatestringattribute"></a>

Create a string attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createStringAttributeResponse =
  await appwriteconsole.databases.createStringAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    size: 1,
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### size: `number`<a id="size-number"></a>

Attribute size for text attributes, in number of characters.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

##### encrypt: `boolean`<a id="encrypt-boolean"></a>

Toggle encryption for the attribute. Encryption enhances security by not storing any plain text values in the database. However, encrypted attributes cannot be queried.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeString](./models/attribute-string.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/string` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.createUrlAttribute`<a id="appwriteconsoledatabasescreateurlattribute"></a>

Create a URL attribute.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createUrlAttributeResponse =
  await appwriteconsole.databases.createUrlAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### array: `boolean`<a id="array-boolean"></a>

Is attribute an array?

#### 🔄 Return<a id="🔄-return"></a>

[AttributeUrl](./models/attribute-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/url` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.deleteAttributeById`<a id="appwriteconsoledatabasesdeleteattributebyid"></a>

Deletes an attribute.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAttributeByIdResponse =
  await appwriteconsole.databases.deleteAttributeById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/{key}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.deleteById`<a id="appwriteconsoledatabasesdeletebyid"></a>

Delete a database by its unique ID. Only API keys with with databases.write scope can delete a database.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await appwriteconsole.databases.deleteById({
  databaseId: "databaseId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.deleteCollectionById`<a id="appwriteconsoledatabasesdeletecollectionbyid"></a>

Delete a collection by its unique ID. Only users with write permissions have access to delete this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCollectionByIdResponse =
  await appwriteconsole.databases.deleteCollectionById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.deleteDocumentById`<a id="appwriteconsoledatabasesdeletedocumentbyid"></a>

Delete a document by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDocumentByIdResponse =
  await appwriteconsole.databases.deleteDocumentById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.deleteIndexByKey`<a id="appwriteconsoledatabasesdeleteindexbykey"></a>

Delete an index.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteIndexByKeyResponse =
  await appwriteconsole.databases.deleteIndexByKey({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Index Key.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes/{key}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getAttributeById`<a id="appwriteconsoledatabasesgetattributebyid"></a>

Get attribute by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getAttributeByIdResponse =
  await appwriteconsole.databases.getAttributeById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[DatabasesGetAttributeByIdResponse](./models/databases-get-attribute-by-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/{key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getById`<a id="appwriteconsoledatabasesgetbyid"></a>

Get a database by its unique ID. This endpoint response returns a JSON object with the database metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteconsole.databases.getById({
  databaseId: "databaseId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

#### 🔄 Return<a id="🔄-return"></a>

[Database](./models/database.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getCollectionById`<a id="appwriteconsoledatabasesgetcollectionbyid"></a>

Get a collection by its unique ID. This endpoint response returns a JSON object with the collection metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionByIdResponse =
  await appwriteconsole.databases.getCollectionById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getCollectionUsageStats`<a id="appwriteconsoledatabasesgetcollectionusagestats"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getCollectionUsageStatsResponse =
  await appwriteconsole.databases.getCollectionUsageStats({
    databaseId: "databaseId_example",
    range: "30d",
    collectionId: "collectionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageCollection](./models/usage-collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getDocumentById`<a id="appwriteconsoledatabasesgetdocumentbyid"></a>

Get a document by its unique ID. This endpoint response returns a JSON object with the document data.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDocumentByIdResponse = await appwriteconsole.databases.getDocumentById(
  {
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
    queries: [],
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getDocuments`<a id="appwriteconsoledatabasesgetdocuments"></a>

Get a list of all the user's documents in a given collection. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDocumentsResponse = await appwriteconsole.databases.getDocuments({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[DocumentList](./models/document-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getIndexById`<a id="appwriteconsoledatabasesgetindexbyid"></a>

Get index by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getIndexByIdResponse = await appwriteconsole.databases.getIndexById({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  key: "key_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Index Key.

#### 🔄 Return<a id="🔄-return"></a>

[Index](./models/index.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes/{key}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getUsageStats`<a id="appwriteconsoledatabasesgetusagestats"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageStatsResponse = await appwriteconsole.databases.getUsageStats({
  range: "30d",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

`Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageDatabases](./models/usage-databases.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.getUsageStats_0`<a id="appwriteconsoledatabasesgetusagestats_0"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageStats_0Response = await appwriteconsole.databases.getUsageStats_0(
  {
    databaseId: "databaseId_example",
    range: "30d",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

`Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageDatabase](./models/usage-database.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.listAllDatabases`<a id="appwriteconsoledatabaseslistalldatabases"></a>

Get a list of all databases from the current Appwrite project. You can use the search parameter to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllDatabasesResponse =
  await appwriteconsole.databases.listAllDatabases({
    queries: [],
    search: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[DatabaseList](./models/database-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.listAttributes`<a id="appwriteconsoledatabaseslistattributes"></a>

List attributes in the collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAttributesResponse = await appwriteconsole.databases.listAttributes({
  databaseId: "databaseId_example",
  collectionId: "collectionId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, size, required, array, status, error

#### 🔄 Return<a id="🔄-return"></a>

[AttributeList](./models/attribute-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.listCollectionIndexes`<a id="appwriteconsoledatabaseslistcollectionindexes"></a>

List indexes in the collection.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionIndexesResponse =
  await appwriteconsole.databases.listCollectionIndexes({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: key, type, status, attributes, error

#### 🔄 Return<a id="🔄-return"></a>

[IndexList](./models/index-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/indexes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.listCollectionLogs`<a id="appwriteconsoledatabaseslistcollectionlogs"></a>

Get the collection activity logs list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionLogsResponse =
  await appwriteconsole.databases.listCollectionLogs({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.listCollections`<a id="appwriteconsoledatabaseslistcollections"></a>

Get a list of all collections that belong to the provided databaseId. You can use the search parameter to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCollectionsResponse = await appwriteconsole.databases.listCollections(
  {
    databaseId: "databaseId_example",
    queries: [],
    search: "",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, documentSecurity

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[CollectionList](./models/collection-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.listDocumentLogs`<a id="appwriteconsoledatabaseslistdocumentlogs"></a>

Get the document activity logs list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDocumentLogsResponse =
  await appwriteconsole.databases.listDocumentLogs({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.listLogs`<a id="appwriteconsoledatabaseslistlogs"></a>

Get the database activity logs list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLogsResponse = await appwriteconsole.databases.listLogs({
  databaseId: "databaseId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.patchDateTimeAttribute`<a id="appwriteconsoledatabasespatchdatetimeattribute"></a>

Update a date time attribute. Changing the `default` value will not update already existing documents.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const patchDateTimeAttributeResponse =
  await appwriteconsole.databases.patchDateTimeAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeDatetime](./models/attribute-datetime.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/datetime/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateBooleanAttribute`<a id="appwriteconsoledatabasesupdatebooleanattribute"></a>

Update a boolean attribute. Changing the `default` value will not update already existing documents.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBooleanAttributeResponse =
  await appwriteconsole.databases.updateBooleanAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `boolean`<a id="default-boolean"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeBoolean](./models/attribute-boolean.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/boolean/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateById`<a id="appwriteconsoledatabasesupdatebyid"></a>

Update a database by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await appwriteconsole.databases.updateById({
  databaseId: "databaseId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Database name. Max length: 128 chars.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is database enabled? When set to \\\'disabled\\\', users cannot access the database but Server SDKs with an API key can still read and write to the database. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Database](./models/database.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateCollectionById`<a id="appwriteconsoledatabasesupdatecollectionbyid"></a>

Update a collection by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCollectionByIdResponse =
  await appwriteconsole.databases.updateCollectionById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Collection name. Max length: 128 chars.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### documentSecurity: `boolean`<a id="documentsecurity-boolean"></a>

Enables configuring permissions for individual documents. A user needs one of document or collection level permissions to access a document. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is collection enabled? When set to \\\'disabled\\\', users cannot access the collection but Server SDKs with and API key can still read and write to the collection. No data is lost when this is toggled.

#### 🔄 Return<a id="🔄-return"></a>

[Collection](./models/collection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateDocumentById`<a id="appwriteconsoledatabasesupdatedocumentbyid"></a>

Update a document by its unique ID. Using the patch method you can pass only specific fields that will get updated.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDocumentByIdResponse =
  await appwriteconsole.databases.updateDocumentById({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    documentId: "documentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID.

##### documentId: `string`<a id="documentid-string"></a>

Document ID.

##### data: `object`<a id="data-object"></a>

Document data as JSON object. Include only attribute and value pairs to be updated.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permissions strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🔄 Return<a id="🔄-return"></a>

[Document](./models/document.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/documents/{documentId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateEmailAttribute`<a id="appwriteconsoledatabasesupdateemailattribute"></a>

Update an email attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailAttributeResponse =
  await appwriteconsole.databases.updateEmailAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEmail](./models/attribute-email.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/email/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateEnumAttribute`<a id="appwriteconsoledatabasesupdateenumattribute"></a>

Update an enum attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEnumAttributeResponse =
  await appwriteconsole.databases.updateEnumAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    elements: ["elements_example"],
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### elements: `string`[]<a id="elements-string"></a>

Array of elements in enumerated type. Uses length of longest element to determine size. Maximum of 100 elements are allowed, each 255 characters long.

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeEnum](./models/attribute-enum.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/enum/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateFloatAttribute`<a id="appwriteconsoledatabasesupdatefloatattribute"></a>

Update a float attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFloatAttributeResponse =
  await appwriteconsole.databases.updateFloatAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    min: 3.14,
    max: 3.14,
    _default: 3.14,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeFloat](./models/attribute-float.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/float/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateIntegerAttribute`<a id="appwriteconsoledatabasesupdateintegerattribute"></a>

Update an integer attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIntegerAttributeResponse =
  await appwriteconsole.databases.updateIntegerAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    min: 1,
    max: 1,
    _default: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### min: `number`<a id="min-number"></a>

Minimum value to enforce on new documents

##### max: `number`<a id="max-number"></a>

Maximum value to enforce on new documents

##### default: `number`<a id="default-number"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeInteger](./models/attribute-integer.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/integer/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateIpAddressAttribute`<a id="appwriteconsoledatabasesupdateipaddressattribute"></a>

Update an ip attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIpAddressAttributeResponse =
  await appwriteconsole.databases.updateIpAddressAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeIp](./models/attribute-ip.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/ip/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateRelationshipAttribute`<a id="appwriteconsoledatabasesupdaterelationshipattribute"></a>

Update relationship attribute. [Learn more about relationship attributes](https://appwrite.io/docs/databases-relationships#relationship-attributes).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRelationshipAttributeResponse =
  await appwriteconsole.databases.updateRelationshipAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    onDelete: "cascade",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

##### onDelete: `string`<a id="ondelete-string"></a>

Constraints option

#### 🔄 Return<a id="🔄-return"></a>

[AttributeRelationship](./models/attribute-relationship.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/{key}/relationship` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateStringAttribute`<a id="appwriteconsoledatabasesupdatestringattribute"></a>

Update a string attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStringAttributeResponse =
  await appwriteconsole.databases.updateStringAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeString](./models/attribute-string.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/string/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.databases.updateUrlAttribute`<a id="appwriteconsoledatabasesupdateurlattribute"></a>

Update an url attribute. Changing the `default` value will not update already existing documents.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUrlAttributeResponse =
  await appwriteconsole.databases.updateUrlAttribute({
    databaseId: "databaseId_example",
    collectionId: "collectionId_example",
    key: "key_example",
    required: true,
    _default: "_default_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### required: `boolean`<a id="required-boolean"></a>

Is attribute required?

##### default: `string`<a id="default-string"></a>

Default value for attribute when not provided. Cannot be set when attribute is required.

##### databaseId: `string`<a id="databaseid-string"></a>

Database ID.

##### collectionId: `string`<a id="collectionid-string"></a>

Collection ID. You can create a new collection using the Database service [server integration](https://appwrite.io/docs/server/databases#databasesCreateCollection).

##### key: `string`<a id="key-string"></a>

Attribute Key.

#### 🔄 Return<a id="🔄-return"></a>

[AttributeUrl](./models/attribute-url.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/databases/{databaseId}/collections/{collectionId}/attributes/url/{key}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.createDeployment`<a id="appwriteconsolefunctionscreatedeployment"></a>

Create a new function code deployment. Use this endpoint to upload a new version of your code function. To execute your newly uploaded code, you'll need to update the function's deployment to use your new deployment UID.

This endpoint accepts a tar.gz file compressed with your code. Make sure to include any dependencies your code has within the compressed file. You can learn more about code packaging in the [Appwrite Cloud Functions tutorial](https://appwrite.io/docs/functions).

Use the "command" param to set the entrypoint used to execute your code.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createDeploymentResponse =
  await appwriteconsole.functions.createDeployment({
    functionId: "functionId_example",
    code: "code_example",
    activate: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### code: `string`<a id="code-string"></a>

Gzip file with your code package. When used with the Appwrite CLI, pass the path to your code directory, and the CLI will automatically package your code. Use a path that is within the current directory.

##### activate: `boolean`<a id="activate-boolean"></a>

Automatically activate the deployment when it is finished building.

##### entrypoint: `string`<a id="entrypoint-string"></a>

Entrypoint File.

##### commands: `string`<a id="commands-string"></a>

Build Commands.

#### 🔄 Return<a id="🔄-return"></a>

[Deployment](./models/deployment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.createFunction`<a id="appwriteconsolefunctionscreatefunction"></a>

Create a new function. You can pass a list of [permissions](https://appwrite.io/docs/permissions) to allow different project users or team with access to execute the function using the client API.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFunctionResponse = await appwriteconsole.functions.createFunction({
  functionId: "functionId_example",
  name: "name_example",
  runtime: "node-14.5",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Function name. Max length: 128 chars.

##### runtime: `string`<a id="runtime-string"></a>

Execution runtime.

##### execute: `string`[]<a id="execute-string"></a>

An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

##### events: `string`[]<a id="events-string"></a>

Events list. Maximum of 100 events are allowed.

##### schedule: `string`<a id="schedule-string"></a>

Schedule CRON syntax.

##### timeout: `number`<a id="timeout-number"></a>

Function maximum execution time in seconds.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is function enabled? When set to \\\'disabled\\\', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.

##### logging: `boolean`<a id="logging-boolean"></a>

Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project.

##### entrypoint: `string`<a id="entrypoint-string"></a>

Entrypoint File. This path is relative to the \\\"providerRootDirectory\\\".

##### commands: `string`<a id="commands-string"></a>

Build Commands.

##### installationId: `string`<a id="installationid-string"></a>

Appwrite Installation ID for VCS (Version Control System) deployment.

##### providerRepositoryId: `string`<a id="providerrepositoryid-string"></a>

Repository ID of the repo linked to the function.

##### providerBranch: `string`<a id="providerbranch-string"></a>

Production branch for the repo linked to the function.

##### providerSilentMode: `boolean`<a id="providersilentmode-boolean"></a>

Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.

##### providerRootDirectory: `string`<a id="providerrootdirectory-string"></a>

Path to function code in the linked repo.

##### templateRepository: `string`<a id="templaterepository-string"></a>

Repository name of the template.

##### templateOwner: `string`<a id="templateowner-string"></a>

The name of the owner of the template.

##### templateRootDirectory: `string`<a id="templaterootdirectory-string"></a>

Path to function code in the template repo.

##### templateBranch: `string`<a id="templatebranch-string"></a>

Production branch for the repo linked to the function template.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.createVariable`<a id="appwriteconsolefunctionscreatevariable"></a>

Create a new function environment variable. These variables can be accessed in the function at runtime as environment variables.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVariableResponse = await appwriteconsole.functions.createVariable({
  functionId: "functionId_example",
  key: "key_example",
  value: "value_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Variable key. Max length: 255 chars.

##### value: `string`<a id="value-string"></a>

Variable value. Max length: 8192 chars.

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.deleteDeployment`<a id="appwriteconsolefunctionsdeletedeployment"></a>

Delete a code deployment by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteDeploymentResponse =
  await appwriteconsole.functions.deleteDeployment({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.deleteFunctionById`<a id="appwriteconsolefunctionsdeletefunctionbyid"></a>

Delete a function by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFunctionByIdResponse =
  await appwriteconsole.functions.deleteFunctionById({
    functionId: "functionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.deleteVariableById`<a id="appwriteconsolefunctionsdeletevariablebyid"></a>

Delete a variable by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteVariableByIdResponse =
  await appwriteconsole.functions.deleteVariableById({
    functionId: "functionId_example",
    variableId: "variableId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables/{variableId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.downloadDeploymentContents`<a id="appwriteconsolefunctionsdownloaddeploymentcontents"></a>

Get a Deployment's contents by its unique ID. This endpoint supports range requests for partial or streaming file download.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadDeploymentContentsResponse =
  await appwriteconsole.functions.downloadDeploymentContents({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.getById`<a id="appwriteconsolefunctionsgetbyid"></a>

Get a function by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteconsole.functions.getById({
  functionId: "functionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.getDeploymentById`<a id="appwriteconsolefunctionsgetdeploymentbyid"></a>

Get a code deployment by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDeploymentByIdResponse =
  await appwriteconsole.functions.getDeploymentById({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🔄 Return<a id="🔄-return"></a>

[Deployment](./models/deployment.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.getExecutionLog`<a id="appwriteconsolefunctionsgetexecutionlog"></a>

Get a function execution log by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getExecutionLogResponse = await appwriteconsole.functions.getExecutionLog(
  {
    functionId: "functionId_example",
    executionId: "executionId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### executionId: `string`<a id="executionid-string"></a>

Execution ID.

#### 🔄 Return<a id="🔄-return"></a>

[Execution](./models/execution.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions/{executionId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.getFunctionUsage`<a id="appwriteconsolefunctionsgetfunctionusage"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFunctionUsageResponse =
  await appwriteconsole.functions.getFunctionUsage({
    functionId: "functionId_example",
    range: "30d",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageFunction](./models/usage-function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.getUsageStats`<a id="appwriteconsolefunctionsgetusagestats"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageStatsResponse = await appwriteconsole.functions.getUsageStats({
  range: "30d",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageFunctions](./models/usage-functions.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.getVariableById`<a id="appwriteconsolefunctionsgetvariablebyid"></a>

Get a variable by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getVariableByIdResponse = await appwriteconsole.functions.getVariableById(
  {
    functionId: "functionId_example",
    variableId: "variableId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables/{variableId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.listAll`<a id="appwriteconsolefunctionslistall"></a>

Get a list of all the project's functions. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await appwriteconsole.functions.listAll({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, enabled, runtime, deployment, schedule, scheduleNext, schedulePrevious, timeout, entrypoint, commands, installationId

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[FunctionList](./models/function-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.listDeployments`<a id="appwriteconsolefunctionslistdeployments"></a>

Get a list of all the project's code deployments. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDeploymentsResponse = await appwriteconsole.functions.listDeployments(
  {
    functionId: "functionId_example",
    queries: [],
    search: "",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: size, buildId, activate, entrypoint, commands

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[DeploymentList](./models/deployment-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.listExecutions`<a id="appwriteconsolefunctionslistexecutions"></a>

Get a list of all the current user function execution logs. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listExecutionsResponse = await appwriteconsole.functions.listExecutions({
  functionId: "functionId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: trigger, status, responseStatusCode, duration

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ExecutionList](./models/execution-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.listRuntimes`<a id="appwriteconsolefunctionslistruntimes"></a>

Get a list of all runtimes that are currently active on your instance.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRuntimesResponse = await appwriteconsole.functions.listRuntimes();
```

#### 🔄 Return<a id="🔄-return"></a>

[RuntimeList](./models/runtime-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/runtimes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.listVariables`<a id="appwriteconsolefunctionslistvariables"></a>

Get a list of all variables of a specific function.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVariablesResponse = await appwriteconsole.functions.listVariables({
  functionId: "functionId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[VariableList](./models/variable-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.retryBuild`<a id="appwriteconsolefunctionsretrybuild"></a>

Create a new build for an Appwrite Function deployment. This endpoint can be used to retry a failed build.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const retryBuildResponse = await appwriteconsole.functions.retryBuild({
  functionId: "functionId_example",
  deploymentId: "deploymentId_example",
  buildId: "buildId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

##### buildId: `string`<a id="buildid-string"></a>

Build unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}/builds/{buildId}` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.triggerExecution`<a id="appwriteconsolefunctionstriggerexecution"></a>

Trigger a function execution. The returned object will return you the current execution status. You can ping the `Get Execution` endpoint to get updates on the current execution status. Once this endpoint is called, your function execution process will start asynchronously.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerExecutionResponse =
  await appwriteconsole.functions.triggerExecution({
    functionId: "functionId_example",
    method: "GET",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### body: `string`<a id="body-string"></a>

HTTP body of execution. Default value is empty string.

##### async: `boolean`<a id="async-boolean"></a>

Execute code in the background. Default value is false.

##### path: `string`<a id="path-string"></a>

HTTP path of execution. Path can include query params. Default value is /

##### method: `string`<a id="method-string"></a>

HTTP method of execution. Default value is GET.

##### headers: `object`<a id="headers-object"></a>

HTTP headers of execution. Defaults to empty.

#### 🔄 Return<a id="🔄-return"></a>

[Execution](./models/execution.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/executions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.updateById`<a id="appwriteconsolefunctionsupdatebyid"></a>

Update function by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateByIdResponse = await appwriteconsole.functions.updateById({
  functionId: "functionId_example",
  name: "name_example",
  runtime: "node-14.5",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Function name. Max length: 128 chars.

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### runtime: `string`<a id="runtime-string"></a>

Execution runtime.

##### execute: `string`[]<a id="execute-string"></a>

An array of role strings with execution permissions. By default no user is granted with any execute permissions. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

##### events: `string`[]<a id="events-string"></a>

Events list. Maximum of 100 events are allowed.

##### schedule: `string`<a id="schedule-string"></a>

Schedule CRON syntax.

##### timeout: `number`<a id="timeout-number"></a>

Maximum execution time in seconds.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is function enabled? When set to \\\'disabled\\\', users cannot access the function but Server SDKs with and API key can still access the function. No data is lost when this is toggled.

##### logging: `boolean`<a id="logging-boolean"></a>

Whether executions will be logged. When set to false, executions will not be logged, but will reduce resource used by your Appwrite project.

##### entrypoint: `string`<a id="entrypoint-string"></a>

Entrypoint File. This path is relative to the \\\"providerRootDirectory\\\".

##### commands: `string`<a id="commands-string"></a>

Build Commands.

##### installationId: `string`<a id="installationid-string"></a>

Appwrite Installation ID for VCS (Version Controle System) deployment.

##### providerRepositoryId: `string`<a id="providerrepositoryid-string"></a>

Repository ID of the repo linked to the function

##### providerBranch: `string`<a id="providerbranch-string"></a>

Production branch for the repo linked to the function

##### providerSilentMode: `boolean`<a id="providersilentmode-boolean"></a>

Is the VCS (Version Control System) connection in silent mode for the repo linked to the function? In silent mode, comments will not be made on commits and pull requests.

##### providerRootDirectory: `string`<a id="providerrootdirectory-string"></a>

Path to function code in the linked repo.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.updateDeploymentByFunctionAndId`<a id="appwriteconsolefunctionsupdatedeploymentbyfunctionandid"></a>

Update the function code deployment ID using the unique function ID. Use this endpoint to switch the code deployment that should be executed by the execution endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDeploymentByFunctionAndIdResponse =
  await appwriteconsole.functions.updateDeploymentByFunctionAndId({
    functionId: "functionId_example",
    deploymentId: "deploymentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### functionId: `string`<a id="functionid-string"></a>

Function ID.

##### deploymentId: `string`<a id="deploymentid-string"></a>

Deployment ID.

#### 🔄 Return<a id="🔄-return"></a>

[Function](./models/function.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/deployments/{deploymentId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.functions.updateVariableById`<a id="appwriteconsolefunctionsupdatevariablebyid"></a>

Update variable by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateVariableByIdResponse =
  await appwriteconsole.functions.updateVariableById({
    functionId: "functionId_example",
    variableId: "variableId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Variable key. Max length: 255 chars.

##### functionId: `string`<a id="functionid-string"></a>

Function unique ID.

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

##### value: `string`<a id="value-string"></a>

Variable value. Max length: 8192 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/functions/{functionId}/variables/{variableId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.graphql.executeMutation`<a id="appwriteconsolegraphqlexecutemutation"></a>

Execute a GraphQL mutation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeMutationResponse = await appwriteconsole.graphql.executeMutation();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/graphql` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.graphql.executeMutation_0`<a id="appwriteconsolegraphqlexecutemutation_0"></a>

Execute a GraphQL mutation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const executeMutation_0Response =
  await appwriteconsole.graphql.executeMutation_0();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/graphql/mutation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.certificatesQueueCount`<a id="appwriteconsolehealthcertificatesqueuecount"></a>

Get the number of certificates that are waiting to be issued against [Letsencrypt](https://letsencrypt.org/) in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const certificatesQueueCountResponse =
  await appwriteconsole.health.certificatesQueueCount({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/certificates` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.checkAppwriteHttpServer`<a id="appwriteconsolehealthcheckappwritehttpserver"></a>

Check the Appwrite HTTP server is up and responsive.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkAppwriteHttpServerResponse =
  await appwriteconsole.health.checkAppwriteHttpServer();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.checkAvStatus`<a id="appwriteconsolehealthcheckavstatus"></a>

Check the Appwrite Antivirus server is up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkAvStatusResponse = await appwriteconsole.health.checkAvStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthAntivirus](./models/health-antivirus.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/anti-virus` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.checkCacheStatus`<a id="appwriteconsolehealthcheckcachestatus"></a>

Check the Appwrite in-memory cache servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkCacheStatusResponse =
  await appwriteconsole.health.checkCacheStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/cache` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.checkDatabaseStatus`<a id="appwriteconsolehealthcheckdatabasestatus"></a>

Check the Appwrite database servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkDatabaseStatusResponse =
  await appwriteconsole.health.checkDatabaseStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/db` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.checkLocalStorage`<a id="appwriteconsolehealthchecklocalstorage"></a>

Check the Appwrite local storage device is up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkLocalStorageResponse =
  await appwriteconsole.health.checkLocalStorage();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/storage/local` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.checkQueueStatus`<a id="appwriteconsolehealthcheckqueuestatus"></a>

Check the Appwrite queue messaging servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkQueueStatusResponse =
  await appwriteconsole.health.checkQueueStatus();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.checkStorageDevice`<a id="appwriteconsolehealthcheckstoragedevice"></a>

Check the Appwrite storage device is up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkStorageDeviceResponse =
  await appwriteconsole.health.checkStorageDevice();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/storage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.functionsQueueCount`<a id="appwriteconsolehealthfunctionsqueuecount"></a>

Get the number of function executions that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const functionsQueueCountResponse =
  await appwriteconsole.health.functionsQueueCount({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/functions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getBuildsQueue`<a id="appwriteconsolehealthgetbuildsqueue"></a>

Get the number of builds that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBuildsQueueResponse = await appwriteconsole.health.getBuildsQueue({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/builds` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getDatabasesQueue`<a id="appwriteconsolehealthgetdatabasesqueue"></a>

Get the number of database changes that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDatabasesQueueResponse =
  await appwriteconsole.health.getDatabasesQueue({
    name: "database_db_main",
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Queue name for which to check the queue size

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/databases` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getFailedJobs`<a id="appwriteconsolehealthgetfailedjobs"></a>

Returns the amount of failed jobs in a given queue.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFailedJobsResponse = await appwriteconsole.health.getFailedJobs({
  name: "v1-database",
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `'v1-database' | 'v1-deletes' | 'v1-audits' | 'v1-mails' | 'v1-functions' | 'v1-usage' | 'v1-usage-dump' | 'webhooksv1' | 'v1-certificates' | 'v1-builds' | 'v1-messaging' | 'v1-migrations' | 'hamsterv1'`<a id="name-v1-database--v1-deletes--v1-audits--v1-mails--v1-functions--v1-usage--v1-usage-dump--webhooksv1--v1-certificates--v1-builds--v1-messaging--v1-migrations--hamsterv1"></a>

The name of the queue

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/failed/{name}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getMailsQueue`<a id="appwriteconsolehealthgetmailsqueue"></a>

Get the number of mails that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMailsQueueResponse = await appwriteconsole.health.getMailsQueue({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/mails` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getMessagingQueue`<a id="appwriteconsolehealthgetmessagingqueue"></a>

Get the number of messages that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessagingQueueResponse =
  await appwriteconsole.health.getMessagingQueue({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/messaging` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getMigrationsQueue`<a id="appwriteconsolehealthgetmigrationsqueue"></a>

Get the number of migrations that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMigrationsQueueResponse =
  await appwriteconsole.health.getMigrationsQueue({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/migrations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getQueueDeletes`<a id="appwriteconsolehealthgetqueuedeletes"></a>

Get the number of background destructive changes that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueDeletesResponse = await appwriteconsole.health.getQueueDeletes({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/deletes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getQueueLogs`<a id="appwriteconsolehealthgetqueuelogs"></a>

Get the number of logs that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueLogsResponse = await appwriteconsole.health.getQueueLogs({
  threshold: 5000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getQueueUsageMetrics`<a id="appwriteconsolehealthgetqueueusagemetrics"></a>

Get the number of metrics that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQueueUsageMetricsResponse =
  await appwriteconsole.health.getQueueUsageMetrics({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getSslCertificate`<a id="appwriteconsolehealthgetsslcertificate"></a>

Get the SSL certificate for a domain

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSslCertificateResponse =
  await appwriteconsole.health.getSslCertificate({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

string

#### 🔄 Return<a id="🔄-return"></a>

[HealthCertificate](./models/health-certificate.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/certificate` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.getUsageDumpQueue`<a id="appwriteconsolehealthgetusagedumpqueue"></a>

Get the number of projects containing metrics that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageDumpQueueResponse =
  await appwriteconsole.health.getUsageDumpQueue({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/usage-dump` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.pubsubGet`<a id="appwriteconsolehealthpubsubget"></a>

Check the Appwrite pub-sub servers are up and connection is successful.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pubsubGetResponse = await appwriteconsole.health.pubsubGet();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthStatus](./models/health-status.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/pubsub` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.syncTimeWithNtp`<a id="appwriteconsolehealthsynctimewithntp"></a>

Check the Appwrite server time is synced with Google remote NTP server. We use this technology to smoothly handle leap seconds with no disruptive events. The [Network Time Protocol](https://en.wikipedia.org/wiki/Network_Time_Protocol) (NTP) is used by hundreds of millions of computers and devices to synchronize their clocks over the Internet. If your computer sets its own clock, it likely uses NTP.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const syncTimeWithNtpResponse = await appwriteconsole.health.syncTimeWithNtp();
```

#### 🔄 Return<a id="🔄-return"></a>

[HealthTime](./models/health-time.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/time` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.health.webhooksQueueCount`<a id="appwriteconsolehealthwebhooksqueuecount"></a>

Get the number of webhooks that are waiting to be processed in the Appwrite internal queue server.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const webhooksQueueCountResponse =
  await appwriteconsole.health.webhooksQueueCount({
    threshold: 5000,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### threshold: `number`<a id="threshold-number"></a>

Queue size threshold. When hit (equal or higher), endpoint returns server error. Default value is 5000.

#### 🔄 Return<a id="🔄-return"></a>

[HealthQueue](./models/health-queue.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/health/queue/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.getUserLocaleDetails`<a id="appwriteconsolelocalegetuserlocaledetails"></a>

Get the current user location based on IP. Returns an object with user country code, country name, continent name, continent code, ip address and suggested currency. You can use the locale header to get the data in a supported language.

([IP Geolocation by DB-IP](https://db-ip.com))

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserLocaleDetailsResponse =
  await appwriteconsole.locale.getUserLocaleDetails();
```

#### 🔄 Return<a id="🔄-return"></a>

[Locale](./models/locale.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.listCodes`<a id="appwriteconsolelocalelistcodes"></a>

List of all locale codes in [ISO 639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCodesResponse = await appwriteconsole.locale.listCodes();
```

#### 🔄 Return<a id="🔄-return"></a>

[LocaleCodeList](./models/locale-code-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.listContinents`<a id="appwriteconsolelocalelistcontinents"></a>

List of all continents. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listContinentsResponse = await appwriteconsole.locale.listContinents();
```

#### 🔄 Return<a id="🔄-return"></a>

[ContinentList](./models/continent-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/continents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.listCountries`<a id="appwriteconsolelocalelistcountries"></a>

List of all countries. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCountriesResponse = await appwriteconsole.locale.listCountries();
```

#### 🔄 Return<a id="🔄-return"></a>

[CountryList](./models/country-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.listCountriesPhones`<a id="appwriteconsolelocalelistcountriesphones"></a>

List of all countries phone codes. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCountriesPhonesResponse =
  await appwriteconsole.locale.listCountriesPhones();
```

#### 🔄 Return<a id="🔄-return"></a>

[PhoneList](./models/phone-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries/phones` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.listCurrencies`<a id="appwriteconsolelocalelistcurrencies"></a>

List of all currencies, including currency symbol, name, plural, and decimal digits for all major and minor currencies. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCurrenciesResponse = await appwriteconsole.locale.listCurrencies();
```

#### 🔄 Return<a id="🔄-return"></a>

[CurrencyList](./models/currency-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/currencies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.listEUCountries`<a id="appwriteconsolelocalelisteucountries"></a>

List of all countries that are currently members of the EU. You can use the locale header to get the data in a supported language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listEUCountriesResponse = await appwriteconsole.locale.listEUCountries();
```

#### 🔄 Return<a id="🔄-return"></a>

[CountryList](./models/country-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/countries/eu` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.locale.listLanguages`<a id="appwriteconsolelocalelistlanguages"></a>

List of all languages classified by ISO 639-1 including 2-letter code, name in English, and name in the respective language.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLanguagesResponse = await appwriteconsole.locale.listLanguages();
```

#### 🔄 Return<a id="🔄-return"></a>

[LanguageList](./models/language-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/locale/languages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createApnsProvider`<a id="appwriteconsolemessagingcreateapnsprovider"></a>

Create a new Apple Push Notification service provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createApnsProviderResponse =
  await appwriteconsole.messaging.createApnsProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### authKey: `string`<a id="authkey-string"></a>

APNS authentication key.

##### authKeyId: `string`<a id="authkeyid-string"></a>

APNS authentication key ID.

##### teamId: `string`<a id="teamid-string"></a>

APNS team ID.

##### bundleId: `string`<a id="bundleid-string"></a>

APNS bundle ID.

##### sandbox: `boolean`<a id="sandbox-boolean"></a>

Use APNS sandbox environment.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/apns` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createEmailMessage`<a id="appwriteconsolemessagingcreateemailmessage"></a>

Create a new email message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmailMessageResponse =
  await appwriteconsole.messaging.createEmailMessage({
    messageId: "messageId_example",
    subject: "subject_example",
    content: "content_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### subject: `string`<a id="subject-string"></a>

Email Subject.

##### content: `string`<a id="content-string"></a>

Email Content.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### cc: `string`[]<a id="cc-string"></a>

Array of target IDs to be added as CC.

##### bcc: `string`[]<a id="bcc-string"></a>

Array of target IDs to be added as BCC.

##### attachments: `string`[]<a id="attachments-string"></a>

Array of compound bucket IDs to file IDs to be attached to the email.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### html: `boolean`<a id="html-boolean"></a>

Is content of type HTML

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/email` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createFcmProvider`<a id="appwriteconsolemessagingcreatefcmprovider"></a>

Create a new Firebase Cloud Messaging provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFcmProviderResponse =
  await appwriteconsole.messaging.createFcmProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### serviceAccountJSON: `object`<a id="serviceaccountjson-object"></a>

FCM service account JSON.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/fcm` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createMailgunProvider`<a id="appwriteconsolemessagingcreatemailgunprovider"></a>

Create a new Mailgun provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMailgunProviderResponse =
  await appwriteconsole.messaging.createMailgunProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### apiKey: `string`<a id="apikey-string"></a>

Mailgun API Key.

##### domain: `string`<a id="domain-string"></a>

Mailgun Domain.

##### isEuRegion: `boolean`<a id="iseuregion-boolean"></a>

Set as EU region.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name. Reply to name must have reply to email as well.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email. Reply to email must have reply to name as well.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/mailgun` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createMsgProvider`<a id="appwriteconsolemessagingcreatemsgprovider"></a>

Create a new MSG91 provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMsgProviderResponse =
  await appwriteconsole.messaging.createMsgProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### senderId: `string`<a id="senderid-string"></a>

Msg91 Sender ID.

##### authKey: `string`<a id="authkey-string"></a>

Msg91 Auth Key.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/msg91` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createNewTopic`<a id="appwriteconsolemessagingcreatenewtopic"></a>

Create a new topic.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewTopicResponse = await appwriteconsole.messaging.createNewTopic({
  topicId: "topicId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. Choose a custom Topic ID or a new Topic ID.

##### name: `string`<a id="name-string"></a>

Topic Name.

##### subscribe: `string`[]<a id="subscribe-string"></a>

An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Topic](./models/topic.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createPushNotification`<a id="appwriteconsolemessagingcreatepushnotification"></a>

Create a new push notification.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPushNotificationResponse =
  await appwriteconsole.messaging.createPushNotification({
    title: "title_example",
    messageId: "messageId_example",
    body: "body_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

Title for push notification.

##### messageId: `string`<a id="messageid-string"></a>

Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### body: `string`<a id="body-string"></a>

Body for push notification.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### data: `object`<a id="data-object"></a>

Additional Data for push notification.

##### action: `string`<a id="action-string"></a>

Action for push notification.

##### image: `string`<a id="image-string"></a>

Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage.

##### icon: `string`<a id="icon-string"></a>

Icon for push notification. Available only for Android and Web Platform.

##### sound: `string`<a id="sound-string"></a>

Sound for push notification. Available only for Android and IOS Platform.

##### color: `string`<a id="color-string"></a>

Color for push notification. Available only for Android Platform.

##### tag: `string`<a id="tag-string"></a>

Tag for push notification. Available only for Android Platform.

##### badge: `string`<a id="badge-string"></a>

Badge for push notification. Available only for IOS Platform.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/push` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createSendgridProvider`<a id="appwriteconsolemessagingcreatesendgridprovider"></a>

Create a new Sendgrid provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSendgridProviderResponse =
  await appwriteconsole.messaging.createSendgridProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### apiKey: `string`<a id="apikey-string"></a>

Sendgrid API key.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/sendgrid` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createSmsMessage`<a id="appwriteconsolemessagingcreatesmsmessage"></a>

Create a new SMS message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSmsMessageResponse =
  await appwriteconsole.messaging.createSmsMessage({
    messageId: "messageId_example",
    content: "content_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### content: `string`<a id="content-string"></a>

SMS Content.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/sms` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createSmtpProvider`<a id="appwriteconsolemessagingcreatesmtpprovider"></a>

Create a new SMTP provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSmtpProviderResponse =
  await appwriteconsole.messaging.createSmtpProvider({
    providerId: "providerId_example",
    name: "name_example",
    host: "host_example",
    encryption: "none",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### host: `string`<a id="host-string"></a>

SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465\\\"`. Hosts will be tried in order.

##### port: `number`<a id="port-number"></a>

The default SMTP server port.

##### username: `string`<a id="username-string"></a>

Authentication username.

##### password: `string`<a id="password-string"></a>

Authentication password.

##### encryption: `string`<a id="encryption-string"></a>

Encryption type. Can be omitted, \\\'ssl\\\', or \\\'tls\\\'

##### autoTLS: `boolean`<a id="autotls-boolean"></a>

Enable SMTP AutoTLS feature.

##### mailer: `string`<a id="mailer-string"></a>

The value to use for the X-Mailer header.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/smtp` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createSubscriber`<a id="appwriteconsolemessagingcreatesubscriber"></a>

Create a new subscriber.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSubscriberResponse =
  await appwriteconsole.messaging.createSubscriber({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
    targetId: "targetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID. Choose a custom Subscriber ID or a new Subscriber ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID. The target ID to link to the specified Topic ID.

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID to subscribe to.

#### 🔄 Return<a id="🔄-return"></a>

[Subscriber](./models/subscriber.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createTelesignProvider`<a id="appwriteconsolemessagingcreatetelesignprovider"></a>

Create a new Telesign provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTelesignProviderResponse =
  await appwriteconsole.messaging.createTelesignProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### customerId: `string`<a id="customerid-string"></a>

Telesign customer ID.

##### apiKey: `string`<a id="apikey-string"></a>

Telesign API key.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/telesign` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createTextmagicProvider`<a id="appwriteconsolemessagingcreatetextmagicprovider"></a>

Create a new Textmagic provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTextmagicProviderResponse =
  await appwriteconsole.messaging.createTextmagicProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### username: `string`<a id="username-string"></a>

Textmagic username.

##### apiKey: `string`<a id="apikey-string"></a>

Textmagic apiKey.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/textmagic` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createTwilioProvider`<a id="appwriteconsolemessagingcreatetwilioprovider"></a>

Create a new Twilio provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTwilioProviderResponse =
  await appwriteconsole.messaging.createTwilioProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### accountSid: `string`<a id="accountsid-string"></a>

Twilio account secret ID.

##### authToken: `string`<a id="authtoken-string"></a>

Twilio authentication token.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/twilio` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.createVonageProvider`<a id="appwriteconsolemessagingcreatevonageprovider"></a>

Create a new Vonage provider.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVonageProviderResponse =
  await appwriteconsole.messaging.createVonageProvider({
    providerId: "providerId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Provider name.

##### from: `string`<a id="from-string"></a>

Sender Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### apiKey: `string`<a id="apikey-string"></a>

Vonage API key.

##### apiSecret: `string`<a id="apisecret-string"></a>

Vonage API secret.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/vonage` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.deleteMessage`<a id="appwriteconsolemessagingdeletemessage"></a>

Delete a message. If the message is not a draft or scheduled, but has been sent, this will not recall the message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMessageResponse = await appwriteconsole.messaging.deleteMessage({
  messageId: "messageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.deleteProviderById`<a id="appwriteconsolemessagingdeleteproviderbyid"></a>

Delete a provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteProviderByIdResponse =
  await appwriteconsole.messaging.deleteProviderById({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/{providerId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.deleteSubscriberById`<a id="appwriteconsolemessagingdeletesubscriberbyid"></a>

Delete a subscriber by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSubscriberByIdResponse =
  await appwriteconsole.messaging.deleteSubscriberById({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID subscribed to.

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers/{subscriberId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.deleteTopicById`<a id="appwriteconsolemessagingdeletetopicbyid"></a>

Delete a topic by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTopicByIdResponse = await appwriteconsole.messaging.deleteTopicById(
  {
    topicId: "topicId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.getMessageById`<a id="appwriteconsolemessaginggetmessagebyid"></a>

Get a message by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMessageByIdResponse = await appwriteconsole.messaging.getMessageById({
  messageId: "messageId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.getProviderById`<a id="appwriteconsolemessaginggetproviderbyid"></a>

Get a provider by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getProviderByIdResponse = await appwriteconsole.messaging.getProviderById(
  {
    providerId: "providerId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/{providerId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.getSubscriberById`<a id="appwriteconsolemessaginggetsubscriberbyid"></a>

Get a subscriber by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSubscriberByIdResponse =
  await appwriteconsole.messaging.getSubscriberById({
    topicId: "topicId_example",
    subscriberId: "subscriberId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID subscribed to.

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID.

#### 🔄 Return<a id="🔄-return"></a>

[Subscriber](./models/subscriber.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers/{subscriberId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.getTopicById`<a id="appwriteconsolemessaginggettopicbyid"></a>

Get a topic by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTopicByIdResponse = await appwriteconsole.messaging.getTopicById({
  topicId: "topicId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

#### 🔄 Return<a id="🔄-return"></a>

[Topic](./models/topic.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listAllMessages`<a id="appwriteconsolemessaginglistallmessages"></a>

Get a list of all messages from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllMessagesResponse = await appwriteconsole.messaging.listAllMessages(
  {
    queries: [],
    search: "",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: scheduledAt, deliveredAt, deliveredTotal, status, description, providerType

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[MessageList](./models/message-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listMessageLogs`<a id="appwriteconsolemessaginglistmessagelogs"></a>

Get the message activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMessageLogsResponse = await appwriteconsole.messaging.listMessageLogs(
  {
    messageId: "messageId_example",
    queries: [],
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listProviderLogs`<a id="appwriteconsolemessaginglistproviderlogs"></a>

Get the provider activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProviderLogsResponse =
  await appwriteconsole.messaging.listProviderLogs({
    providerId: "providerId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/{providerId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listProviders`<a id="appwriteconsolemessaginglistproviders"></a>

Get a list of all providers from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProvidersResponse = await appwriteconsole.messaging.listProviders({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ProviderList](./models/provider-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listSubscriberLogs`<a id="appwriteconsolemessaginglistsubscriberlogs"></a>

Get the subscriber activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSubscriberLogsResponse =
  await appwriteconsole.messaging.listSubscriberLogs({
    subscriberId: "subscriberId_example",
    queries: [],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subscriberId: `string`<a id="subscriberid-string"></a>

Subscriber ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/subscribers/{subscriberId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listSubscribers`<a id="appwriteconsolemessaginglistsubscribers"></a>

Get a list of all subscribers from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSubscribersResponse = await appwriteconsole.messaging.listSubscribers(
  {
    topicId: "topicId_example",
    queries: [],
    search: "",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID. The topic ID subscribed to.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, provider, type, enabled

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[SubscriberList](./models/subscriber-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/subscribers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listTargets`<a id="appwriteconsolemessaginglisttargets"></a>

Get a list of the targets associated with a message.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTargetsResponse = await appwriteconsole.messaging.listTargets({
  messageId: "messageId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, providerId, identifier, providerType

#### 🔄 Return<a id="🔄-return"></a>

[TargetList](./models/target-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/{messageId}/targets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listTopicLogs`<a id="appwriteconsolemessaginglisttopiclogs"></a>

Get the topic activity logs listed by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTopicLogsResponse = await appwriteconsole.messaging.listTopicLogs({
  topicId: "topicId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.listTopics`<a id="appwriteconsolemessaginglisttopics"></a>

Get a list of all topics from the current Appwrite project.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTopicsResponse = await appwriteconsole.messaging.listTopics({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, description, emailTotal, smsTotal, pushTotal

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[TopicList](./models/topic-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateApnsProvider`<a id="appwriteconsolemessagingupdateapnsprovider"></a>

Update a Apple Push Notification service provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateApnsProviderResponse =
  await appwriteconsole.messaging.updateApnsProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### authKey: `string`<a id="authkey-string"></a>

APNS authentication key.

##### authKeyId: `string`<a id="authkeyid-string"></a>

APNS authentication key ID.

##### teamId: `string`<a id="teamid-string"></a>

APNS team ID.

##### bundleId: `string`<a id="bundleid-string"></a>

APNS bundle ID.

##### sandbox: `boolean`<a id="sandbox-boolean"></a>

Use APNS sandbox environment.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/apns/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateEmailById`<a id="appwriteconsolemessagingupdateemailbyid"></a>

Update an email message by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailByIdResponse = await appwriteconsole.messaging.updateEmailById(
  {
    messageId: "messageId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### subject: `string`<a id="subject-string"></a>

Email Subject.

##### content: `string`<a id="content-string"></a>

Email Content.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### html: `boolean`<a id="html-boolean"></a>

Is content of type HTML

##### cc: `string`[]<a id="cc-string"></a>

Array of target IDs to be added as CC.

##### bcc: `string`[]<a id="bcc-string"></a>

Array of target IDs to be added as BCC.

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/email/{messageId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateFcmProvider`<a id="appwriteconsolemessagingupdatefcmprovider"></a>

Update a Firebase Cloud Messaging provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFcmProviderResponse =
  await appwriteconsole.messaging.updateFcmProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### serviceAccountJSON: `object`<a id="serviceaccountjson-object"></a>

FCM service account JSON.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/fcm/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateMailgunProvider`<a id="appwriteconsolemessagingupdatemailgunprovider"></a>

Update a Mailgun provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMailgunProviderResponse =
  await appwriteconsole.messaging.updateMailgunProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### apiKey: `string`<a id="apikey-string"></a>

Mailgun API Key.

##### domain: `string`<a id="domain-string"></a>

Mailgun Domain.

##### isEuRegion: `boolean`<a id="iseuregion-boolean"></a>

Set as EU region.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the reply to field for the mail. Default value is sender name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the reply to field for the mail. Default value is sender email.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/mailgun/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateProviderById`<a id="appwriteconsolemessagingupdateproviderbyid"></a>

Update a MSG91 provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateProviderByIdResponse =
  await appwriteconsole.messaging.updateProviderById({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### senderId: `string`<a id="senderid-string"></a>

Msg91 Sender ID.

##### authKey: `string`<a id="authkey-string"></a>

Msg91 Auth Key.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/msg91/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updatePushMessage`<a id="appwriteconsolemessagingupdatepushmessage"></a>

Update a push notification by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePushMessageResponse =
  await appwriteconsole.messaging.updatePushMessage({
    messageId: "messageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### title: `string`<a id="title-string"></a>

Title for push notification.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### body: `string`<a id="body-string"></a>

Body for push notification.

##### data: `object`<a id="data-object"></a>

Additional Data for push notification.

##### action: `string`<a id="action-string"></a>

Action for push notification.

##### image: `string`<a id="image-string"></a>

Image for push notification. Must be a compound bucket ID to file ID of a jpeg, png, or bmp image in Appwrite Storage.

##### icon: `string`<a id="icon-string"></a>

Icon for push notification. Available only for Android and Web platforms.

##### sound: `string`<a id="sound-string"></a>

Sound for push notification. Available only for Android and iOS platforms.

##### color: `string`<a id="color-string"></a>

Color for push notification. Available only for Android platforms.

##### tag: `string`<a id="tag-string"></a>

Tag for push notification. Available only for Android platforms.

##### badge: `number`<a id="badge-number"></a>

Badge for push notification. Available only for iOS platforms.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/push/{messageId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateSendgridProvider`<a id="appwriteconsolemessagingupdatesendgridprovider"></a>

Update a Sendgrid provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSendgridProviderResponse =
  await appwriteconsole.messaging.updateSendgridProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### apiKey: `string`<a id="apikey-string"></a>

Sendgrid API key.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the Reply To field for the mail. Default value is Sender Name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the Reply To field for the mail. Default value is Sender Email.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/sendgrid/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateSmsMessageById`<a id="appwriteconsolemessagingupdatesmsmessagebyid"></a>

Update an email message by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSmsMessageByIdResponse =
  await appwriteconsole.messaging.updateSmsMessageById({
    messageId: "messageId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### messageId: `string`<a id="messageid-string"></a>

Message ID.

##### topics: `string`[]<a id="topics-string"></a>

List of Topic IDs.

##### users: `string`[]<a id="users-string"></a>

List of User IDs.

##### targets: `string`[]<a id="targets-string"></a>

List of Targets IDs.

##### content: `string`<a id="content-string"></a>

Email Content.

##### draft: `boolean`<a id="draft-boolean"></a>

Is message a draft

##### scheduledAt: `string`<a id="scheduledat-string"></a>

Scheduled delivery time for message in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. DateTime value must be in future.

#### 🔄 Return<a id="🔄-return"></a>

[Message](./models/message.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/messages/sms/{messageId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateSmtpProvider`<a id="appwriteconsolemessagingupdatesmtpprovider"></a>

Update a SMTP provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSmtpProviderResponse =
  await appwriteconsole.messaging.updateSmtpProvider({
    providerId: "providerId_example",
    encryption: "none",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### host: `string`<a id="host-string"></a>

SMTP hosts. Either a single hostname or multiple semicolon-delimited hostnames. You can also specify a different port for each host such as `smtp1.example.com:25;smtp2.example.com`. You can also specify encryption type, for example: `tls://smtp1.example.com:587;ssl://smtp2.example.com:465\\\"`. Hosts will be tried in order.

##### port: `number`<a id="port-number"></a>

SMTP port.

##### username: `string`<a id="username-string"></a>

Authentication username.

##### password: `string`<a id="password-string"></a>

Authentication password.

##### encryption: `string`<a id="encryption-string"></a>

Encryption type. Can be \\\'ssl\\\' or \\\'tls\\\'

##### autoTLS: `boolean`<a id="autotls-boolean"></a>

Enable SMTP AutoTLS feature.

##### mailer: `string`<a id="mailer-string"></a>

The value to use for the X-Mailer header.

##### fromName: `string`<a id="fromname-string"></a>

Sender Name.

##### fromEmail: `string`<a id="fromemail-string"></a>

Sender email address.

##### replyToName: `string`<a id="replytoname-string"></a>

Name set in the Reply To field for the mail. Default value is Sender Name.

##### replyToEmail: `string`<a id="replytoemail-string"></a>

Email set in the Reply To field for the mail. Default value is Sender Email.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/smtp/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateTelesignProvider`<a id="appwriteconsolemessagingupdatetelesignprovider"></a>

Update a Telesign provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTelesignProviderResponse =
  await appwriteconsole.messaging.updateTelesignProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### customerId: `string`<a id="customerid-string"></a>

Telesign customer ID.

##### apiKey: `string`<a id="apikey-string"></a>

Telesign API key.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/telesign/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateTextmagicProvider`<a id="appwriteconsolemessagingupdatetextmagicprovider"></a>

Update a Textmagic provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTextmagicProviderResponse =
  await appwriteconsole.messaging.updateTextmagicProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### username: `string`<a id="username-string"></a>

Textmagic username.

##### apiKey: `string`<a id="apikey-string"></a>

Textmagic apiKey.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/textmagic/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateTopicById`<a id="appwriteconsolemessagingupdatetopicbyid"></a>

Update a topic by its unique ID.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTopicByIdResponse = await appwriteconsole.messaging.updateTopicById(
  {
    topicId: "topicId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### topicId: `string`<a id="topicid-string"></a>

Topic ID.

##### name: `string`<a id="name-string"></a>

Topic Name.

##### subscribe: `string`[]<a id="subscribe-string"></a>

An array of role strings with subscribe permission. By default all users are granted with any subscribe permission. [learn more about roles](https://appwrite.io/docs/permissions#permission-roles). Maximum of 100 roles are allowed, each 64 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Topic](./models/topic.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/topics/{topicId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateTwilioProvider`<a id="appwriteconsolemessagingupdatetwilioprovider"></a>

Update a Twilio provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTwilioProviderResponse =
  await appwriteconsole.messaging.updateTwilioProvider({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### accountSid: `string`<a id="accountsid-string"></a>

Twilio account secret ID.

##### authToken: `string`<a id="authtoken-string"></a>

Twilio authentication token.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/twilio/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.messaging.updateVonageProviderById`<a id="appwriteconsolemessagingupdatevonageproviderbyid"></a>

Update a Vonage provider by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateVonageProviderByIdResponse =
  await appwriteconsole.messaging.updateVonageProviderById({
    providerId: "providerId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerId: `string`<a id="providerid-string"></a>

Provider ID.

##### name: `string`<a id="name-string"></a>

Provider name.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set as enabled.

##### apiKey: `string`<a id="apikey-string"></a>

Vonage API key.

##### apiSecret: `string`<a id="apisecret-string"></a>

Vonage API secret.

##### from: `string`<a id="from-string"></a>

Sender number.

#### 🔄 Return<a id="🔄-return"></a>

[Provider](./models/provider.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/messaging/providers/vonage/{providerId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.createAppwriteMigration`<a id="appwriteconsolemigrationscreateappwritemigration"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createAppwriteMigrationResponse =
  await appwriteconsole.migrations.createAppwriteMigration({
    resources: ["resources_example"],
    endpoint: "endpoint_example",
    projectId: "projectId_example",
    apiKey: "apiKey_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### endpoint: `string`<a id="endpoint-string"></a>

Source\\\'s Appwrite Endpoint

##### projectId: `string`<a id="projectid-string"></a>

Source\\\'s Project ID

##### apiKey: `string`<a id="apikey-string"></a>

Source\\\'s API Key

#### 🔄 Return<a id="🔄-return"></a>

[Migration](./models/migration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/appwrite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.createNHostMigration`<a id="appwriteconsolemigrationscreatenhostmigration"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNHostMigrationResponse =
  await appwriteconsole.migrations.createNHostMigration({
    resources: ["resources_example"],
    subdomain: "subdomain_example",
    region: "region_example",
    adminSecret: "adminSecret_example",
    database: "database_example",
    username: "username_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### subdomain: `string`<a id="subdomain-string"></a>

Source\\\'s Subdomain

##### region: `string`<a id="region-string"></a>

Source\\\'s Region

##### adminSecret: `string`<a id="adminsecret-string"></a>

Source\\\'s Admin Secret

##### database: `string`<a id="database-string"></a>

Source\\\'s Database Name

##### username: `string`<a id="username-string"></a>

Source\\\'s Database Username

##### password: `string`<a id="password-string"></a>

Source\\\'s Database Password

##### port: `number`<a id="port-number"></a>

Source\\\'s Database Port

#### 🔄 Return<a id="🔄-return"></a>

[Migration](./models/migration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/nhost` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.deleteMigration`<a id="appwriteconsolemigrationsdeletemigration"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteMigrationResponse =
  await appwriteconsole.migrations.deleteMigration({
    migrationId: "migrationId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### migrationId: `string`<a id="migrationid-string"></a>

Migration ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/{migrationId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.firebaseDataMigration`<a id="appwriteconsolemigrationsfirebasedatamigration"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const firebaseDataMigrationResponse =
  await appwriteconsole.migrations.firebaseDataMigration({
    resources: ["resources_example"],
    serviceAccount: "serviceAccount_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### serviceAccount: `string`<a id="serviceaccount-string"></a>

JSON of the Firebase service account credentials

#### 🔄 Return<a id="🔄-return"></a>

[Migration](./models/migration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/firebase` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.firebaseOAuthMigrate`<a id="appwriteconsolemigrationsfirebaseoauthmigrate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const firebaseOAuthMigrateResponse =
  await appwriteconsole.migrations.firebaseOAuthMigrate({
    resources: ["resources_example"],
    projectId: "projectId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### projectId: `string`<a id="projectid-string"></a>

Project ID of the Firebase Project

#### 🔄 Return<a id="🔄-return"></a>

[Migration](./models/migration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/firebase/oauth` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.generateFirebaseReport`<a id="appwriteconsolemigrationsgeneratefirebasereport"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateFirebaseReportResponse =
  await appwriteconsole.migrations.generateFirebaseReport({
    resources: ["resources_example"],
    serviceAccount: "serviceAccount_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### serviceAccount: `string`<a id="serviceaccount-string"></a>

JSON of the Firebase service account credentials

#### 🔄 Return<a id="🔄-return"></a>

[MigrationReport](./models/migration-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/firebase/report` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.generateFirebaseReportOAuth`<a id="appwriteconsolemigrationsgeneratefirebasereportoauth"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateFirebaseReportOAuthResponse =
  await appwriteconsole.migrations.generateFirebaseReportOAuth({
    resources: ["resources_example"],
    projectId: "projectId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### projectId: `string`<a id="projectid-string"></a>

Project ID

#### 🔄 Return<a id="🔄-return"></a>

[MigrationReport](./models/migration-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/firebase/report/oauth` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.generateNhostReport`<a id="appwriteconsolemigrationsgeneratenhostreport"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateNhostReportResponse =
  await appwriteconsole.migrations.generateNhostReport({
    resources: ["resources_example"],
    subdomain: "subdomain_example",
    region: "region_example",
    adminSecret: "adminSecret_example",
    database: "database_example",
    username: "username_example",
    password: "password_example",
    port: 5432,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate.

##### subdomain: `string`<a id="subdomain-string"></a>

Source\'s Subdomain.

##### region: `string`<a id="region-string"></a>

Source\'s Region.

##### adminSecret: `string`<a id="adminsecret-string"></a>

Source\'s Admin Secret.

##### database: `string`<a id="database-string"></a>

Source\'s Database Name.

##### username: `string`<a id="username-string"></a>

Source\'s Database Username.

##### password: `string`<a id="password-string"></a>

Source\'s Database Password.

##### port: `number`<a id="port-number"></a>

Source\'s Database Port.

#### 🔄 Return<a id="🔄-return"></a>

[MigrationReport](./models/migration-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/nhost/report` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.generateReportOnAppwriteData`<a id="appwriteconsolemigrationsgeneratereportonappwritedata"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateReportOnAppwriteDataResponse =
  await appwriteconsole.migrations.generateReportOnAppwriteData({
    resources: ["resources_example"],
    endpoint: "endpoint_example",
    projectID: "projectID_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### endpoint: `string`<a id="endpoint-string"></a>

Source\'s Appwrite Endpoint

##### projectID: `string`<a id="projectid-string"></a>

Source\'s Project ID

##### key: `string`<a id="key-string"></a>

Source\'s API Key

#### 🔄 Return<a id="🔄-return"></a>

[MigrationReport](./models/migration-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/appwrite/report` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.generateSupabaseReport`<a id="appwriteconsolemigrationsgeneratesupabasereport"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateSupabaseReportResponse =
  await appwriteconsole.migrations.generateSupabaseReport({
    resources: ["resources_example"],
    endpoint: "endpoint_example",
    apiKey: "apiKey_example",
    databaseHost: "databaseHost_example",
    username: "username_example",
    password: "password_example",
    port: 5432,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### endpoint: `string`<a id="endpoint-string"></a>

Source\'s Supabase Endpoint.

##### apiKey: `string`<a id="apikey-string"></a>

Source\'s API Key.

##### databaseHost: `string`<a id="databasehost-string"></a>

Source\'s Database Host.

##### username: `string`<a id="username-string"></a>

Source\'s Database Username.

##### password: `string`<a id="password-string"></a>

Source\'s Database Password.

##### port: `number`<a id="port-number"></a>

Source\'s Database Port.

#### 🔄 Return<a id="🔄-return"></a>

[MigrationReport](./models/migration-report.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/supabase/report` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.getById`<a id="appwriteconsolemigrationsgetbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteconsole.migrations.getById({
  migrationId: "migrationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### migrationId: `string`<a id="migrationid-string"></a>

Migration unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Migration](./models/migration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/{migrationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.listFirebaseProjects`<a id="appwriteconsolemigrationslistfirebaseprojects"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFirebaseProjectsResponse =
  await appwriteconsole.migrations.listFirebaseProjects();
```

#### 🔄 Return<a id="🔄-return"></a>

[FirebaseProjectList](./models/firebase-project-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/firebase/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.listMigrations`<a id="appwriteconsolemigrationslistmigrations"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMigrationsResponse = await appwriteconsole.migrations.listMigrations({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: status, stage, source, resources, statusCounters, resourceData, errors

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[MigrationList](./models/migration-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.migrateSupabaseData`<a id="appwriteconsolemigrationsmigratesupabasedata"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const migrateSupabaseDataResponse =
  await appwriteconsole.migrations.migrateSupabaseData({
    resources: ["resources_example"],
    endpoint: "endpoint_example",
    apiKey: "apiKey_example",
    databaseHost: "databaseHost_example",
    username: "username_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### resources: `string`[]<a id="resources-string"></a>

List of resources to migrate

##### endpoint: `string`<a id="endpoint-string"></a>

Source\\\'s Supabase Endpoint

##### apiKey: `string`<a id="apikey-string"></a>

Source\\\'s API Key

##### databaseHost: `string`<a id="databasehost-string"></a>

Source\\\'s Database Host

##### username: `string`<a id="username-string"></a>

Source\\\'s Database Username

##### password: `string`<a id="password-string"></a>

Source\\\'s Database Password

##### port: `number`<a id="port-number"></a>

Source\\\'s Database Port

#### 🔄 Return<a id="🔄-return"></a>

[Migration](./models/migration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/supabase` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.retryMigration`<a id="appwriteconsolemigrationsretrymigration"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const retryMigrationResponse = await appwriteconsole.migrations.retryMigration({
  migrationId: "migrationId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### migrationId: `string`<a id="migrationid-string"></a>

Migration unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Migration](./models/migration.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/{migrationId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.migrations.revokeFirebaseAuthorization`<a id="appwriteconsolemigrationsrevokefirebaseauthorization"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const revokeFirebaseAuthorizationResponse =
  await appwriteconsole.migrations.revokeFirebaseAuthorization();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/migrations/firebase/deauthorize` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.project.createVariable`<a id="appwriteconsoleprojectcreatevariable"></a>

Create a new project variable. This variable will be accessible in all Appwrite Functions at runtime.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createVariableResponse = await appwriteconsole.project.createVariable({
  key: "key_example",
  value: "value_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Variable key. Max length: 255 chars.

##### value: `string`<a id="value-string"></a>

Variable value. Max length: 8192 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/variables` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.project.deleteVariableById`<a id="appwriteconsoleprojectdeletevariablebyid"></a>

Delete a project variable by its unique ID. 

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteVariableByIdResponse =
  await appwriteconsole.project.deleteVariableById({
    variableId: "variableId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/variables/{variableId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.project.getUsageStats`<a id="appwriteconsoleprojectgetusagestats"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageStatsResponse = await appwriteconsole.project.getUsageStats({
  startDate: "startDate_example",
  endDate: "endDate_example",
  period: "1d",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### startDate: `string`<a id="startdate-string"></a>

Starting date for the usage

##### endDate: `string`<a id="enddate-string"></a>

End date for the usage

##### period: `'1h' | '1d'`<a id="period-1h--1d"></a>

Period used

#### 🔄 Return<a id="🔄-return"></a>

[UsageProject](./models/usage-project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.project.listVariables`<a id="appwriteconsoleprojectlistvariables"></a>

Get a list of all project variables. These variables will be accessible in all Appwrite Functions at runtime.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listVariablesResponse = await appwriteconsole.project.listVariables();
```

#### 🔄 Return<a id="🔄-return"></a>

[VariableList](./models/variable-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/variables` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.project.updateVariableById`<a id="appwriteconsoleprojectupdatevariablebyid"></a>

Update project variable by its unique ID. This variable will be accessible in all Appwrite Functions at runtime.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateVariableByIdResponse =
  await appwriteconsole.project.updateVariableById({
    variableId: "variableId_example",
    key: "key_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### key: `string`<a id="key-string"></a>

Variable key. Max length: 255 chars.

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

##### value: `string`<a id="value-string"></a>

Variable value. Max length: 8192 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/variables/{variableId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.project.variableDetails`<a id="appwriteconsoleprojectvariabledetails"></a>

Get a project variable by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const variableDetailsResponse = await appwriteconsole.project.variableDetails({
  variableId: "variableId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### variableId: `string`<a id="variableid-string"></a>

Variable unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Variable](./models/variable.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/project/variables/{variableId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.createKey`<a id="appwriteconsoleprojectscreatekey"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createKeyResponse = await appwriteconsole.projects.createKey({
  projectId: "projectId_example",
  name: "name_example",
  scopes: ["scopes_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Key name. Max length: 128 chars.

##### scopes: `string`[]<a id="scopes-string"></a>

Key scopes list. Maximum of 100 scopes are allowed.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### expire: `string`<a id="expire-string"></a>

Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.

#### 🔄 Return<a id="🔄-return"></a>

[Key](./models/key.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/keys` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.createNewProject`<a id="appwriteconsoleprojectscreatenewproject"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewProjectResponse =
  await appwriteconsole.projects.createNewProject({
    projectId: "projectId_example",
    name: "name_example",
    teamId: "teamId_example",
    region: "default",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, and hyphen. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Project name. Max length: 128 chars.

##### teamId: `string`<a id="teamid-string"></a>

Team unique ID.

##### description: `string`<a id="description-string"></a>

Project description. Max length: 256 chars.

##### region: `string`<a id="region-string"></a>

Project Region.

##### logo: `string`<a id="logo-string"></a>

Project logo.

##### url: `string`<a id="url-string"></a>

Project URL.

##### legalName: `string`<a id="legalname-string"></a>

Project legal Name. Max length: 256 chars.

##### legalCountry: `string`<a id="legalcountry-string"></a>

Project legal Country. Max length: 256 chars.

##### legalState: `string`<a id="legalstate-string"></a>

Project legal State. Max length: 256 chars.

##### legalCity: `string`<a id="legalcity-string"></a>

Project legal City. Max length: 256 chars.

##### legalAddress: `string`<a id="legaladdress-string"></a>

Project legal Address. Max length: 256 chars.

##### legalTaxId: `string`<a id="legaltaxid-string"></a>

Project legal Tax ID. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.createPlatform`<a id="appwriteconsoleprojectscreateplatform"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createPlatformResponse = await appwriteconsole.projects.createPlatform({
  projectId: "projectId_example",
  type: "web",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

Platform type.

##### name: `string`<a id="name-string"></a>

Platform name. Max length: 128 chars.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### key: `string`<a id="key-string"></a>

Package name for Android or bundle ID for iOS or macOS. Max length: 256 chars.

##### store: `string`<a id="store-string"></a>

App store or Google Play store ID. Max length: 256 chars.

##### hostname: `string`<a id="hostname-string"></a>

Platform client hostname. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Platform](./models/platform.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/platforms` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.createSmtpTest`<a id="appwriteconsoleprojectscreatesmtptest"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSmtpTestResponse = await appwriteconsole.projects.createSmtpTest({
  projectId: "projectId_example",
  emails: ["emails_example"],
  senderName: "senderName_example",
  senderEmail: "senderEmail_example",
  host: "host_example",
  secure: "tls",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### emails: `string`[]<a id="emails-string"></a>

Array of emails to send test email to. Maximum of 10 emails are allowed.

##### senderName: `string`<a id="sendername-string"></a>

Name of the email sender

##### senderEmail: `string`<a id="senderemail-string"></a>

Email of the sender

##### host: `string`<a id="host-string"></a>

SMTP server host name

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### replyTo: `string`<a id="replyto-string"></a>

Reply to email

##### port: `number`<a id="port-number"></a>

SMTP server port

##### username: `string`<a id="username-string"></a>

SMTP server username

##### password: `string`<a id="password-string"></a>

SMTP server password

##### secure: `string`<a id="secure-string"></a>

Does SMTP server use secure connection

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/smtp/tests` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.createWebhook`<a id="appwriteconsoleprojectscreatewebhook"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWebhookResponse = await appwriteconsole.projects.createWebhook({
  projectId: "projectId_example",
  security: true,
  name: "name_example",
  events: ["events_example"],
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### security: `boolean`<a id="security-boolean"></a>

Certificate verification, false for disabled or true for enabled.

##### name: `string`<a id="name-string"></a>

Webhook name. Max length: 128 chars.

##### events: `string`[]<a id="events-string"></a>

Events list. Maximum of 100 events are allowed.

##### url: `string`<a id="url-string"></a>

Webhook URL.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Enable or disable a webhook.

##### httpUser: `string`<a id="httpuser-string"></a>

Webhook HTTP user. Max length: 256 chars.

##### httpPass: `string`<a id="httppass-string"></a>

Webhook HTTP password. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/webhooks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.deleteKey`<a id="appwriteconsoleprojectsdeletekey"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteKeyResponse = await appwriteconsole.projects.deleteKey({
  projectId: "projectId_example",
  keyId: "keyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### keyId: `string`<a id="keyid-string"></a>

Key unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/keys/{keyId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.deletePlatform`<a id="appwriteconsoleprojectsdeleteplatform"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deletePlatformResponse = await appwriteconsole.projects.deletePlatform({
  projectId: "projectId_example",
  platformId: "platformId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### platformId: `string`<a id="platformid-string"></a>

Platform unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/platforms/{platformId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.deleteWebhook`<a id="appwriteconsoleprojectsdeletewebhook"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteWebhookResponse = await appwriteconsole.projects.deleteWebhook({
  projectId: "projectId_example",
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### webhookId: `string`<a id="webhookid-string"></a>

Webhook unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/webhooks/{webhookId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.enablePersonalDataCheck`<a id="appwriteconsoleprojectsenablepersonaldatacheck"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const enablePersonalDataCheckResponse =
  await appwriteconsole.projects.enablePersonalDataCheck({
    projectId: "projectId_example",
    enabled: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set whether or not to check a password for similarity with personal data. Default is false.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/auth/personal-data` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.get`<a id="appwriteconsoleprojectsget"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getResponse = await appwriteconsole.projects.get({
  projectId: "projectId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.getEmailTemplate`<a id="appwriteconsoleprojectsgetemailtemplate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmailTemplateResponse =
  await appwriteconsole.projects.getEmailTemplate({
    projectId: "projectId_example",
    type: "verification",
    locale: "af",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### type: `'verification' | 'magicsession' | 'recovery' | 'invitation' | 'mfachallenge'`<a id="type-verification--magicsession--recovery--invitation--mfachallenge"></a>

Template type

##### locale: `'af' | 'ar-ae' | 'ar-bh' | 'ar-dz' | 'ar-eg' | 'ar-iq' | 'ar-jo' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-om' | 'ar-qa' | 'ar-sa' | 'ar-sy' | 'ar-tn' | 'ar-ye' | 'as' | 'az' | 'be' | 'bg' | 'bh' | 'bn' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'de-at' | 'de-ch' | 'de-li' | 'de-lu' | 'el' | 'en' | 'en-au' | 'en-bz' | 'en-ca' | 'en-gb' | 'en-ie' | 'en-jm' | 'en-nz' | 'en-tt' | 'en-us' | 'en-za' | 'eo' | 'es' | 'es-ar' | 'es-bo' | 'es-cl' | 'es-co' | 'es-cr' | 'es-do' | 'es-ec' | 'es-gt' | 'es-hn' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-pr' | 'es-py' | 'es-sv' | 'es-uy' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fo' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'fr-lu' | 'ga' | 'gd' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'it-ch' | 'ja' | 'ji' | 'ko' | 'ku' | 'lt' | 'lv' | 'mk' | 'ml' | 'ms' | 'mt' | 'nb' | 'ne' | 'nl' | 'nl-be' | 'nn' | 'false' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'rm' | 'ro' | 'ro-md' | 'ru' | 'ru-md' | 'sb' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sv-fi' | 'th' | 'tn' | 'tr' | 'ts' | 'ua' | 'ur' | 've' | 'vi' | 'xh' | 'zh-cn' | 'zh-hk' | 'zh-sg' | 'zh-tw' | 'zu'`<a id="locale-af--ar-ae--ar-bh--ar-dz--ar-eg--ar-iq--ar-jo--ar-kw--ar-lb--ar-ly--ar-ma--ar-om--ar-qa--ar-sa--ar-sy--ar-tn--ar-ye--as--az--be--bg--bh--bn--bs--ca--cs--cy--da--de--de-at--de-ch--de-li--de-lu--el--en--en-au--en-bz--en-ca--en-gb--en-ie--en-jm--en-nz--en-tt--en-us--en-za--eo--es--es-ar--es-bo--es-cl--es-co--es-cr--es-do--es-ec--es-gt--es-hn--es-mx--es-ni--es-pa--es-pe--es-pr--es-py--es-sv--es-uy--es-ve--et--eu--fa--fi--fo--fr--fr-be--fr-ca--fr-ch--fr-lu--ga--gd--he--hi--hr--hu--id--is--it--it-ch--ja--ji--ko--ku--lt--lv--mk--ml--ms--mt--nb--ne--nl--nl-be--nn--false--pa--pl--pt--pt-br--rm--ro--ro-md--ru--ru-md--sb--sk--sl--sq--sr--sv--sv-fi--th--tn--tr--ts--ua--ur--ve--vi--xh--zh-cn--zh-hk--zh-sg--zh-tw--zu"></a>

Template locale

#### 🔄 Return<a id="🔄-return"></a>

[EmailTemplate](./models/email-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/templates/email/{type}/{locale}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.getKey`<a id="appwriteconsoleprojectsgetkey"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getKeyResponse = await appwriteconsole.projects.getKey({
  projectId: "projectId_example",
  keyId: "keyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### keyId: `string`<a id="keyid-string"></a>

Key unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Key](./models/key.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/keys/{keyId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.getPlatformById`<a id="appwriteconsoleprojectsgetplatformbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPlatformByIdResponse = await appwriteconsole.projects.getPlatformById({
  projectId: "projectId_example",
  platformId: "platformId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### platformId: `string`<a id="platformid-string"></a>

Platform unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Platform](./models/platform.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/platforms/{platformId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.getSmsTemplate`<a id="appwriteconsoleprojectsgetsmstemplate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getSmsTemplateResponse = await appwriteconsole.projects.getSmsTemplate({
  projectId: "projectId_example",
  type: "verification",
  locale: "af",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### type: `'verification' | 'login' | 'invitation' | 'mfachallenge'`<a id="type-verification--login--invitation--mfachallenge"></a>

Template type

##### locale: `'af' | 'ar-ae' | 'ar-bh' | 'ar-dz' | 'ar-eg' | 'ar-iq' | 'ar-jo' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-om' | 'ar-qa' | 'ar-sa' | 'ar-sy' | 'ar-tn' | 'ar-ye' | 'as' | 'az' | 'be' | 'bg' | 'bh' | 'bn' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'de-at' | 'de-ch' | 'de-li' | 'de-lu' | 'el' | 'en' | 'en-au' | 'en-bz' | 'en-ca' | 'en-gb' | 'en-ie' | 'en-jm' | 'en-nz' | 'en-tt' | 'en-us' | 'en-za' | 'eo' | 'es' | 'es-ar' | 'es-bo' | 'es-cl' | 'es-co' | 'es-cr' | 'es-do' | 'es-ec' | 'es-gt' | 'es-hn' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-pr' | 'es-py' | 'es-sv' | 'es-uy' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fo' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'fr-lu' | 'ga' | 'gd' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'it-ch' | 'ja' | 'ji' | 'ko' | 'ku' | 'lt' | 'lv' | 'mk' | 'ml' | 'ms' | 'mt' | 'nb' | 'ne' | 'nl' | 'nl-be' | 'nn' | 'false' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'rm' | 'ro' | 'ro-md' | 'ru' | 'ru-md' | 'sb' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sv-fi' | 'th' | 'tn' | 'tr' | 'ts' | 'ua' | 'ur' | 've' | 'vi' | 'xh' | 'zh-cn' | 'zh-hk' | 'zh-sg' | 'zh-tw' | 'zu'`<a id="locale-af--ar-ae--ar-bh--ar-dz--ar-eg--ar-iq--ar-jo--ar-kw--ar-lb--ar-ly--ar-ma--ar-om--ar-qa--ar-sa--ar-sy--ar-tn--ar-ye--as--az--be--bg--bh--bn--bs--ca--cs--cy--da--de--de-at--de-ch--de-li--de-lu--el--en--en-au--en-bz--en-ca--en-gb--en-ie--en-jm--en-nz--en-tt--en-us--en-za--eo--es--es-ar--es-bo--es-cl--es-co--es-cr--es-do--es-ec--es-gt--es-hn--es-mx--es-ni--es-pa--es-pe--es-pr--es-py--es-sv--es-uy--es-ve--et--eu--fa--fi--fo--fr--fr-be--fr-ca--fr-ch--fr-lu--ga--gd--he--hi--hr--hu--id--is--it--it-ch--ja--ji--ko--ku--lt--lv--mk--ml--ms--mt--nb--ne--nl--nl-be--nn--false--pa--pl--pt--pt-br--rm--ro--ro-md--ru--ru-md--sb--sk--sl--sq--sr--sv--sv-fi--th--tn--tr--ts--ua--ur--ve--vi--xh--zh-cn--zh-hk--zh-sg--zh-tw--zu"></a>

Template locale

#### 🔄 Return<a id="🔄-return"></a>

[SmsTemplate](./models/sms-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/templates/sms/{type}/{locale}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.getWebhook`<a id="appwriteconsoleprojectsgetwebhook"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getWebhookResponse = await appwriteconsole.projects.getWebhook({
  projectId: "projectId_example",
  webhookId: "webhookId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### webhookId: `string`<a id="webhookid-string"></a>

Webhook unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/webhooks/{webhookId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.listKeys`<a id="appwriteconsoleprojectslistkeys"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listKeysResponse = await appwriteconsole.projects.listKeys({
  projectId: "projectId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[KeyList](./models/key-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/keys` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.listPlatforms`<a id="appwriteconsoleprojectslistplatforms"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listPlatformsResponse = await appwriteconsole.projects.listPlatforms({
  projectId: "projectId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[PlatformList](./models/platform-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/platforms` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.listProjects`<a id="appwriteconsoleprojectslistprojects"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProjectsResponse = await appwriteconsole.projects.listProjects({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, teamId

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ProjectList](./models/project-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.listWebhooks`<a id="appwriteconsoleprojectslistwebhooks"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listWebhooksResponse = await appwriteconsole.projects.listWebhooks({
  projectId: "projectId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[WebhookList](./models/webhook-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/webhooks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.removeById`<a id="appwriteconsoleprojectsremovebyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await appwriteconsole.projects.removeById({
  projectId: "projectId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.resetEmailTemplate`<a id="appwriteconsoleprojectsresetemailtemplate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resetEmailTemplateResponse =
  await appwriteconsole.projects.resetEmailTemplate({
    projectId: "projectId_example",
    type: "verification",
    locale: "af",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### type: `'verification' | 'magicsession' | 'recovery' | 'invitation' | 'mfachallenge'`<a id="type-verification--magicsession--recovery--invitation--mfachallenge"></a>

Template type

##### locale: `'af' | 'ar-ae' | 'ar-bh' | 'ar-dz' | 'ar-eg' | 'ar-iq' | 'ar-jo' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-om' | 'ar-qa' | 'ar-sa' | 'ar-sy' | 'ar-tn' | 'ar-ye' | 'as' | 'az' | 'be' | 'bg' | 'bh' | 'bn' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'de-at' | 'de-ch' | 'de-li' | 'de-lu' | 'el' | 'en' | 'en-au' | 'en-bz' | 'en-ca' | 'en-gb' | 'en-ie' | 'en-jm' | 'en-nz' | 'en-tt' | 'en-us' | 'en-za' | 'eo' | 'es' | 'es-ar' | 'es-bo' | 'es-cl' | 'es-co' | 'es-cr' | 'es-do' | 'es-ec' | 'es-gt' | 'es-hn' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-pr' | 'es-py' | 'es-sv' | 'es-uy' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fo' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'fr-lu' | 'ga' | 'gd' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'it-ch' | 'ja' | 'ji' | 'ko' | 'ku' | 'lt' | 'lv' | 'mk' | 'ml' | 'ms' | 'mt' | 'nb' | 'ne' | 'nl' | 'nl-be' | 'nn' | 'false' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'rm' | 'ro' | 'ro-md' | 'ru' | 'ru-md' | 'sb' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sv-fi' | 'th' | 'tn' | 'tr' | 'ts' | 'ua' | 'ur' | 've' | 'vi' | 'xh' | 'zh-cn' | 'zh-hk' | 'zh-sg' | 'zh-tw' | 'zu'`<a id="locale-af--ar-ae--ar-bh--ar-dz--ar-eg--ar-iq--ar-jo--ar-kw--ar-lb--ar-ly--ar-ma--ar-om--ar-qa--ar-sa--ar-sy--ar-tn--ar-ye--as--az--be--bg--bh--bn--bs--ca--cs--cy--da--de--de-at--de-ch--de-li--de-lu--el--en--en-au--en-bz--en-ca--en-gb--en-ie--en-jm--en-nz--en-tt--en-us--en-za--eo--es--es-ar--es-bo--es-cl--es-co--es-cr--es-do--es-ec--es-gt--es-hn--es-mx--es-ni--es-pa--es-pe--es-pr--es-py--es-sv--es-uy--es-ve--et--eu--fa--fi--fo--fr--fr-be--fr-ca--fr-ch--fr-lu--ga--gd--he--hi--hr--hu--id--is--it--it-ch--ja--ji--ko--ku--lt--lv--mk--ml--ms--mt--nb--ne--nl--nl-be--nn--false--pa--pl--pt--pt-br--rm--ro--ro-md--ru--ru-md--sb--sk--sl--sq--sr--sv--sv-fi--th--tn--tr--ts--ua--ur--ve--vi--xh--zh-cn--zh-hk--zh-sg--zh-tw--zu"></a>

Template locale

#### 🔄 Return<a id="🔄-return"></a>

[EmailTemplate](./models/email-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/templates/email/{type}/{locale}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.resetSmsTemplate`<a id="appwriteconsoleprojectsresetsmstemplate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const resetSmsTemplateResponse =
  await appwriteconsole.projects.resetSmsTemplate({
    projectId: "projectId_example",
    type: "verification",
    locale: "af",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### type: `'verification' | 'login' | 'invitation' | 'mfachallenge'`<a id="type-verification--login--invitation--mfachallenge"></a>

Template type

##### locale: `'af' | 'ar-ae' | 'ar-bh' | 'ar-dz' | 'ar-eg' | 'ar-iq' | 'ar-jo' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-om' | 'ar-qa' | 'ar-sa' | 'ar-sy' | 'ar-tn' | 'ar-ye' | 'as' | 'az' | 'be' | 'bg' | 'bh' | 'bn' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'de-at' | 'de-ch' | 'de-li' | 'de-lu' | 'el' | 'en' | 'en-au' | 'en-bz' | 'en-ca' | 'en-gb' | 'en-ie' | 'en-jm' | 'en-nz' | 'en-tt' | 'en-us' | 'en-za' | 'eo' | 'es' | 'es-ar' | 'es-bo' | 'es-cl' | 'es-co' | 'es-cr' | 'es-do' | 'es-ec' | 'es-gt' | 'es-hn' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-pr' | 'es-py' | 'es-sv' | 'es-uy' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fo' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'fr-lu' | 'ga' | 'gd' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'it-ch' | 'ja' | 'ji' | 'ko' | 'ku' | 'lt' | 'lv' | 'mk' | 'ml' | 'ms' | 'mt' | 'nb' | 'ne' | 'nl' | 'nl-be' | 'nn' | 'false' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'rm' | 'ro' | 'ro-md' | 'ru' | 'ru-md' | 'sb' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sv-fi' | 'th' | 'tn' | 'tr' | 'ts' | 'ua' | 'ur' | 've' | 'vi' | 'xh' | 'zh-cn' | 'zh-hk' | 'zh-sg' | 'zh-tw' | 'zu'`<a id="locale-af--ar-ae--ar-bh--ar-dz--ar-eg--ar-iq--ar-jo--ar-kw--ar-lb--ar-ly--ar-ma--ar-om--ar-qa--ar-sa--ar-sy--ar-tn--ar-ye--as--az--be--bg--bh--bn--bs--ca--cs--cy--da--de--de-at--de-ch--de-li--de-lu--el--en--en-au--en-bz--en-ca--en-gb--en-ie--en-jm--en-nz--en-tt--en-us--en-za--eo--es--es-ar--es-bo--es-cl--es-co--es-cr--es-do--es-ec--es-gt--es-hn--es-mx--es-ni--es-pa--es-pe--es-pr--es-py--es-sv--es-uy--es-ve--et--eu--fa--fi--fo--fr--fr-be--fr-ca--fr-ch--fr-lu--ga--gd--he--hi--hr--hu--id--is--it--it-ch--ja--ji--ko--ku--lt--lv--mk--ml--ms--mt--nb--ne--nl--nl-be--nn--false--pa--pl--pt--pt-br--rm--ro--ro-md--ru--ru-md--sb--sk--sl--sq--sr--sv--sv-fi--th--tn--tr--ts--ua--ur--ve--vi--xh--zh-cn--zh-hk--zh-sg--zh-tw--zu"></a>

Template locale

#### 🔄 Return<a id="🔄-return"></a>

[SmsTemplate](./models/sms-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/templates/sms/{type}/{locale}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateAllApiStatus`<a id="appwriteconsoleprojectsupdateallapistatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAllApiStatusResponse =
  await appwriteconsole.projects.updateAllApiStatus({
    projectId: "projectId_example",
    status: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `boolean`<a id="status-boolean"></a>

API status.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/api/all` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateAllServiceStatus`<a id="appwriteconsoleprojectsupdateallservicestatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAllServiceStatusResponse =
  await appwriteconsole.projects.updateAllServiceStatus({
    projectId: "projectId_example",
    status: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `boolean`<a id="status-boolean"></a>

Service status.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/service/all` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateApiStatus`<a id="appwriteconsoleprojectsupdateapistatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateApiStatusResponse = await appwriteconsole.projects.updateApiStatus({
  projectId: "projectId_example",
  api: "rest",
  status: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### api: `string`<a id="api-string"></a>

API name.

##### status: `boolean`<a id="status-boolean"></a>

API status.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/api` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateAuthDuration`<a id="appwriteconsoleprojectsupdateauthduration"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAuthDurationResponse =
  await appwriteconsole.projects.updateAuthDuration({
    projectId: "projectId_example",
    duration: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### duration: `number`<a id="duration-number"></a>

Project session length in seconds. Max length: 31536000 seconds.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/auth/duration` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateAuthMethodStatus`<a id="appwriteconsoleprojectsupdateauthmethodstatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAuthMethodStatusResponse =
  await appwriteconsole.projects.updateAuthMethodStatus({
    projectId: "projectId_example",
    method: "email-password",
    status: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `boolean`<a id="status-boolean"></a>

Set the status of this auth method.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### method: `'email-password' | 'magic-url' | 'email-otp' | 'anonymous' | 'invites' | 'jwt' | 'phone'`<a id="method-email-password--magic-url--email-otp--anonymous--invites--jwt--phone"></a>

Auth Method. Possible values: email-password,magic-url,email-otp,anonymous,invites,jwt,phone

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/auth/{method}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateAuthPasswordDictionary`<a id="appwriteconsoleprojectsupdateauthpassworddictionary"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAuthPasswordDictionaryResponse =
  await appwriteconsole.projects.updateAuthPasswordDictionary({
    projectId: "projectId_example",
    enabled: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### enabled: `boolean`<a id="enabled-boolean"></a>

Set whether or not to enable checking user\\\'s password against most commonly used passwords. Default is false.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/auth/password-dictionary` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateAuthPasswordHistory`<a id="appwriteconsoleprojectsupdateauthpasswordhistory"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateAuthPasswordHistoryResponse =
  await appwriteconsole.projects.updateAuthPasswordHistory({
    projectId: "projectId_example",
    limit: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Set the max number of passwords to store in user history. User can\\\'t choose a new password that is already stored in the password history list.  Max number of passwords allowed in history is20. Default value is 0

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/auth/password-history` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateCustomEmailTemplates`<a id="appwriteconsoleprojectsupdatecustomemailtemplates"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCustomEmailTemplatesResponse =
  await appwriteconsole.projects.updateCustomEmailTemplates({
    projectId: "projectId_example",
    type: "verification",
    locale: "af",
    subject: "subject_example",
    message: "message_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### subject: `string`<a id="subject-string"></a>

Email Subject

##### message: `string`<a id="message-string"></a>

Template message

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### type: `'verification' | 'magicsession' | 'recovery' | 'invitation' | 'mfachallenge'`<a id="type-verification--magicsession--recovery--invitation--mfachallenge"></a>

Template type

##### locale: `'af' | 'ar-ae' | 'ar-bh' | 'ar-dz' | 'ar-eg' | 'ar-iq' | 'ar-jo' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-om' | 'ar-qa' | 'ar-sa' | 'ar-sy' | 'ar-tn' | 'ar-ye' | 'as' | 'az' | 'be' | 'bg' | 'bh' | 'bn' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'de-at' | 'de-ch' | 'de-li' | 'de-lu' | 'el' | 'en' | 'en-au' | 'en-bz' | 'en-ca' | 'en-gb' | 'en-ie' | 'en-jm' | 'en-nz' | 'en-tt' | 'en-us' | 'en-za' | 'eo' | 'es' | 'es-ar' | 'es-bo' | 'es-cl' | 'es-co' | 'es-cr' | 'es-do' | 'es-ec' | 'es-gt' | 'es-hn' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-pr' | 'es-py' | 'es-sv' | 'es-uy' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fo' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'fr-lu' | 'ga' | 'gd' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'it-ch' | 'ja' | 'ji' | 'ko' | 'ku' | 'lt' | 'lv' | 'mk' | 'ml' | 'ms' | 'mt' | 'nb' | 'ne' | 'nl' | 'nl-be' | 'nn' | 'false' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'rm' | 'ro' | 'ro-md' | 'ru' | 'ru-md' | 'sb' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sv-fi' | 'th' | 'tn' | 'tr' | 'ts' | 'ua' | 'ur' | 've' | 'vi' | 'xh' | 'zh-cn' | 'zh-hk' | 'zh-sg' | 'zh-tw' | 'zu'`<a id="locale-af--ar-ae--ar-bh--ar-dz--ar-eg--ar-iq--ar-jo--ar-kw--ar-lb--ar-ly--ar-ma--ar-om--ar-qa--ar-sa--ar-sy--ar-tn--ar-ye--as--az--be--bg--bh--bn--bs--ca--cs--cy--da--de--de-at--de-ch--de-li--de-lu--el--en--en-au--en-bz--en-ca--en-gb--en-ie--en-jm--en-nz--en-tt--en-us--en-za--eo--es--es-ar--es-bo--es-cl--es-co--es-cr--es-do--es-ec--es-gt--es-hn--es-mx--es-ni--es-pa--es-pe--es-pr--es-py--es-sv--es-uy--es-ve--et--eu--fa--fi--fo--fr--fr-be--fr-ca--fr-ch--fr-lu--ga--gd--he--hi--hr--hu--id--is--it--it-ch--ja--ji--ko--ku--lt--lv--mk--ml--ms--mt--nb--ne--nl--nl-be--nn--false--pa--pl--pt--pt-br--rm--ro--ro-md--ru--ru-md--sb--sk--sl--sq--sr--sv--sv-fi--th--tn--tr--ts--ua--ur--ve--vi--xh--zh-cn--zh-hk--zh-sg--zh-tw--zu"></a>

Template locale

##### senderName: `string`<a id="sendername-string"></a>

Name of the email sender

##### senderEmail: `string`<a id="senderemail-string"></a>

Email of the sender

##### replyTo: `string`<a id="replyto-string"></a>

Reply to email

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/templates/email/{type}/{locale}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateDetail`<a id="appwriteconsoleprojectsupdatedetail"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDetailResponse = await appwriteconsole.projects.updateDetail({
  projectId: "projectId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Project name. Max length: 128 chars.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### description: `string`<a id="description-string"></a>

Project description. Max length: 256 chars.

##### logo: `string`<a id="logo-string"></a>

Project logo.

##### url: `string`<a id="url-string"></a>

Project URL.

##### legalName: `string`<a id="legalname-string"></a>

Project legal name. Max length: 256 chars.

##### legalCountry: `string`<a id="legalcountry-string"></a>

Project legal country. Max length: 256 chars.

##### legalState: `string`<a id="legalstate-string"></a>

Project legal state. Max length: 256 chars.

##### legalCity: `string`<a id="legalcity-string"></a>

Project legal city. Max length: 256 chars.

##### legalAddress: `string`<a id="legaladdress-string"></a>

Project legal address. Max length: 256 chars.

##### legalTaxId: `string`<a id="legaltaxid-string"></a>

Project legal tax ID. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateKey`<a id="appwriteconsoleprojectsupdatekey"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateKeyResponse = await appwriteconsole.projects.updateKey({
  projectId: "projectId_example",
  keyId: "keyId_example",
  name: "name_example",
  scopes: ["scopes_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Key name. Max length: 128 chars.

##### scopes: `string`[]<a id="scopes-string"></a>

Key scopes list. Maximum of 100 events are allowed.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### keyId: `string`<a id="keyid-string"></a>

Key unique ID.

##### expire: `string`<a id="expire-string"></a>

Expiration time in [ISO 8601](https://www.iso.org/iso-8601-date-and-time-format.html) format. Use null for unlimited expiration.

#### 🔄 Return<a id="🔄-return"></a>

[Key](./models/key.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/keys/{keyId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateMaxSessionsLimit`<a id="appwriteconsoleprojectsupdatemaxsessionslimit"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMaxSessionsLimitResponse =
  await appwriteconsole.projects.updateMaxSessionsLimit({
    projectId: "projectId_example",
    limit: 1,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Set the max number of users allowed in this project. Value allowed is between 1-100. Default is 10

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/auth/max-sessions` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateOAuth`<a id="appwriteconsoleprojectsupdateoauth"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOAuthResponse = await appwriteconsole.projects.updateOAuth({
  projectId: "projectId_example",
  provider: "amazon",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### provider: `string`<a id="provider-string"></a>

Provider Name

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### appId: `string`<a id="appid-string"></a>

Provider app ID. Max length: 256 chars.

##### secret: `string`<a id="secret-string"></a>

Provider secret key. Max length: 512 chars.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Provider status. Set to \\\'false\\\' to disable new session creation.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/oauth2` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updatePlatformById`<a id="appwriteconsoleprojectsupdateplatformbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePlatformByIdResponse =
  await appwriteconsole.projects.updatePlatformById({
    projectId: "projectId_example",
    platformId: "platformId_example",
    name: "name_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Platform name. Max length: 128 chars.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### platformId: `string`<a id="platformid-string"></a>

Platform unique ID.

##### key: `string`<a id="key-string"></a>

Package name for android or bundle ID for iOS. Max length: 256 chars.

##### store: `string`<a id="store-string"></a>

App store or Google Play store ID. Max length: 256 chars.

##### hostname: `string`<a id="hostname-string"></a>

Platform client URL. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Platform](./models/platform.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/platforms/{platformId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateServiceStatus`<a id="appwriteconsoleprojectsupdateservicestatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateServiceStatusResponse =
  await appwriteconsole.projects.updateServiceStatus({
    projectId: "projectId_example",
    service: "account",
    status: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### service: `string`<a id="service-string"></a>

Service name.

##### status: `boolean`<a id="status-boolean"></a>

Service status.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/service` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateSmsTemplate`<a id="appwriteconsoleprojectsupdatesmstemplate"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSmsTemplateResponse =
  await appwriteconsole.projects.updateSmsTemplate({
    projectId: "projectId_example",
    type: "verification",
    locale: "af",
    message: "message_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### message: `string`<a id="message-string"></a>

Template message

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### type: `'verification' | 'login' | 'invitation' | 'mfachallenge'`<a id="type-verification--login--invitation--mfachallenge"></a>

Template type

##### locale: `'af' | 'ar-ae' | 'ar-bh' | 'ar-dz' | 'ar-eg' | 'ar-iq' | 'ar-jo' | 'ar-kw' | 'ar-lb' | 'ar-ly' | 'ar-ma' | 'ar-om' | 'ar-qa' | 'ar-sa' | 'ar-sy' | 'ar-tn' | 'ar-ye' | 'as' | 'az' | 'be' | 'bg' | 'bh' | 'bn' | 'bs' | 'ca' | 'cs' | 'cy' | 'da' | 'de' | 'de-at' | 'de-ch' | 'de-li' | 'de-lu' | 'el' | 'en' | 'en-au' | 'en-bz' | 'en-ca' | 'en-gb' | 'en-ie' | 'en-jm' | 'en-nz' | 'en-tt' | 'en-us' | 'en-za' | 'eo' | 'es' | 'es-ar' | 'es-bo' | 'es-cl' | 'es-co' | 'es-cr' | 'es-do' | 'es-ec' | 'es-gt' | 'es-hn' | 'es-mx' | 'es-ni' | 'es-pa' | 'es-pe' | 'es-pr' | 'es-py' | 'es-sv' | 'es-uy' | 'es-ve' | 'et' | 'eu' | 'fa' | 'fi' | 'fo' | 'fr' | 'fr-be' | 'fr-ca' | 'fr-ch' | 'fr-lu' | 'ga' | 'gd' | 'he' | 'hi' | 'hr' | 'hu' | 'id' | 'is' | 'it' | 'it-ch' | 'ja' | 'ji' | 'ko' | 'ku' | 'lt' | 'lv' | 'mk' | 'ml' | 'ms' | 'mt' | 'nb' | 'ne' | 'nl' | 'nl-be' | 'nn' | 'false' | 'pa' | 'pl' | 'pt' | 'pt-br' | 'rm' | 'ro' | 'ro-md' | 'ru' | 'ru-md' | 'sb' | 'sk' | 'sl' | 'sq' | 'sr' | 'sv' | 'sv-fi' | 'th' | 'tn' | 'tr' | 'ts' | 'ua' | 'ur' | 've' | 'vi' | 'xh' | 'zh-cn' | 'zh-hk' | 'zh-sg' | 'zh-tw' | 'zu'`<a id="locale-af--ar-ae--ar-bh--ar-dz--ar-eg--ar-iq--ar-jo--ar-kw--ar-lb--ar-ly--ar-ma--ar-om--ar-qa--ar-sa--ar-sy--ar-tn--ar-ye--as--az--be--bg--bh--bn--bs--ca--cs--cy--da--de--de-at--de-ch--de-li--de-lu--el--en--en-au--en-bz--en-ca--en-gb--en-ie--en-jm--en-nz--en-tt--en-us--en-za--eo--es--es-ar--es-bo--es-cl--es-co--es-cr--es-do--es-ec--es-gt--es-hn--es-mx--es-ni--es-pa--es-pe--es-pr--es-py--es-sv--es-uy--es-ve--et--eu--fa--fi--fo--fr--fr-be--fr-ca--fr-ch--fr-lu--ga--gd--he--hi--hr--hu--id--is--it--it-ch--ja--ji--ko--ku--lt--lv--mk--ml--ms--mt--nb--ne--nl--nl-be--nn--false--pa--pl--pt--pt-br--rm--ro--ro-md--ru--ru-md--sb--sk--sl--sq--sr--sv--sv-fi--th--tn--tr--ts--ua--ur--ve--vi--xh--zh-cn--zh-hk--zh-sg--zh-tw--zu"></a>

Template locale

#### 🔄 Return<a id="🔄-return"></a>

[SmsTemplate](./models/sms-template.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/templates/sms/{type}/{locale}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateSmtp`<a id="appwriteconsoleprojectsupdatesmtp"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateSmtpResponse = await appwriteconsole.projects.updateSmtp({
  projectId: "projectId_example",
  enabled: true,
  secure: "tls",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### enabled: `boolean`<a id="enabled-boolean"></a>

Enable custom SMTP service

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### senderName: `string`<a id="sendername-string"></a>

Name of the email sender

##### senderEmail: `string`<a id="senderemail-string"></a>

Email of the sender

##### replyTo: `string`<a id="replyto-string"></a>

Reply to email

##### host: `string`<a id="host-string"></a>

SMTP server host name

##### port: `number`<a id="port-number"></a>

SMTP server port

##### username: `string`<a id="username-string"></a>

SMTP server username

##### password: `string`<a id="password-string"></a>

SMTP server password

##### secure: `string`<a id="secure-string"></a>

Does SMTP server use secure connection

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/smtp` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateTeam`<a id="appwriteconsoleprojectsupdateteam"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateTeamResponse = await appwriteconsole.projects.updateTeam({
  projectId: "projectId_example",
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID of the team to transfer project to.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/team` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateUserLimit`<a id="appwriteconsoleprojectsupdateuserlimit"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateUserLimitResponse = await appwriteconsole.projects.updateUserLimit({
  projectId: "projectId_example",
  limit: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### limit: `number`<a id="limit-number"></a>

Set the max number of users allowed in this project. Use 0 for unlimited.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Project](./models/project.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/auth/limit` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateWebhook`<a id="appwriteconsoleprojectsupdatewebhook"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookResponse = await appwriteconsole.projects.updateWebhook({
  projectId: "projectId_example",
  webhookId: "webhookId_example",
  security: true,
  name: "name_example",
  events: ["events_example"],
  url: "url_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### security: `boolean`<a id="security-boolean"></a>

Certificate verification, false for disabled or true for enabled.

##### name: `string`<a id="name-string"></a>

Webhook name. Max length: 128 chars.

##### events: `string`[]<a id="events-string"></a>

Events list. Maximum of 100 events are allowed.

##### url: `string`<a id="url-string"></a>

Webhook URL.

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### webhookId: `string`<a id="webhookid-string"></a>

Webhook unique ID.

##### enabled: `boolean`<a id="enabled-boolean"></a>

Enable or disable a webhook.

##### httpUser: `string`<a id="httpuser-string"></a>

Webhook HTTP user. Max length: 256 chars.

##### httpPass: `string`<a id="httppass-string"></a>

Webhook HTTP password. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/webhooks/{webhookId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.projects.updateWebhookSignature`<a id="appwriteconsoleprojectsupdatewebhooksignature"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateWebhookSignatureResponse =
  await appwriteconsole.projects.updateWebhookSignature({
    projectId: "projectId_example",
    webhookId: "webhookId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### projectId: `string`<a id="projectid-string"></a>

Project unique ID.

##### webhookId: `string`<a id="webhookid-string"></a>

Webhook unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Webhook](./models/webhook.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/projects/{projectId}/webhooks/{webhookId}/signature` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.proxy.createNewRule`<a id="appwriteconsoleproxycreatenewrule"></a>

Create a new proxy rule.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewRuleResponse = await appwriteconsole.proxy.createNewRule({
  domain: "domain_example",
  resourceType: "api",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### domain: `string`<a id="domain-string"></a>

Domain name.

##### resourceType: `string`<a id="resourcetype-string"></a>

Action definition for the rule. Possible values are \\\"api\\\", \\\"function\\\"

##### resourceId: `string`<a id="resourceid-string"></a>

ID of resource for the action type. If resourceType is \\\"api\\\", leave empty. If resourceType is \\\"function\\\", provide ID of the function.

#### 🔄 Return<a id="🔄-return"></a>

[ProxyRule](./models/proxy-rule.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/proxy/rules` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.proxy.deleteRuleById`<a id="appwriteconsoleproxydeleterulebyid"></a>

Delete a proxy rule by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteRuleByIdResponse = await appwriteconsole.proxy.deleteRuleById({
  ruleId: "ruleId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ruleId: `string`<a id="ruleid-string"></a>

Rule ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/proxy/rules/{ruleId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.proxy.getRuleById`<a id="appwriteconsoleproxygetrulebyid"></a>

Get a proxy rule by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRuleByIdResponse = await appwriteconsole.proxy.getRuleById({
  ruleId: "ruleId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ruleId: `string`<a id="ruleid-string"></a>

Rule ID.

#### 🔄 Return<a id="🔄-return"></a>

[ProxyRule](./models/proxy-rule.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/proxy/rules/{ruleId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.proxy.listRules`<a id="appwriteconsoleproxylistrules"></a>

Get a list of all the proxy rules. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRulesResponse = await appwriteconsole.proxy.listRules({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/databases#querying-documents). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: domain, resourceType, resourceId, url

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ProxyRuleList](./models/proxy-rule-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/proxy/rules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.proxy.updateRuleVerificationStatus`<a id="appwriteconsoleproxyupdateruleverificationstatus"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRuleVerificationStatusResponse =
  await appwriteconsole.proxy.updateRuleVerificationStatus({
    ruleId: "ruleId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ruleId: `string`<a id="ruleid-string"></a>

Rule ID.

#### 🔄 Return<a id="🔄-return"></a>

[ProxyRule](./models/proxy-rule.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/proxy/rules/{ruleId}/verification` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.createBucket`<a id="appwriteconsolestoragecreatebucket"></a>

Create a new storage bucket.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBucketResponse = await appwriteconsole.storage.createBucket({
  bucketId: "bucketId_example",
  name: "name_example",
  compression: "none",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Unique Id. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Bucket name

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, no user is granted with any permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### fileSecurity: `boolean`<a id="filesecurity-boolean"></a>

Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is bucket enabled? When set to \\\'disabled\\\', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.

##### maximumFileSize: `number`<a id="maximumfilesize-number"></a>

Maximum file size allowed in bytes. Maximum allowed value is 30MB.

##### allowedFileExtensions: `string`[]<a id="allowedfileextensions-string"></a>

Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.

##### compression: `string`<a id="compression-string"></a>

Compression algorithm choosen for compression. Can be one of none,  [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it\\\'s enabled

##### encryption: `boolean`<a id="encryption-boolean"></a>

Is encryption enabled? For file size above 20MB encryption is skipped even if it\\\'s enabled

##### antivirus: `boolean`<a id="antivirus-boolean"></a>

Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it\\\'s enabled

#### 🔄 Return<a id="🔄-return"></a>

[Bucket](./models/bucket.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.createFile`<a id="appwriteconsolestoragecreatefile"></a>

Create a new file. Before using this route, you should create a new bucket resource using either a [server integration](https://appwrite.io/docs/server/storage#storageCreateBucket) API or directly from your Appwrite console.

Larger files should be uploaded using multiple requests with the [content-range](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Range) header to send a partial request with a maximum supported chunk of `5MB`. The `content-range` header values should always be in bytes.

When the first request is sent, the server will return the **File** object, and the subsequent part request must include the file's **id** in `x-appwrite-id` header to allow the server to know that the partial upload is for the existing file and not for a new one.

If you're creating a new file using one of the Appwrite SDKs, all the chunking logic will be managed by the SDK internally.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createFileResponse = await appwriteconsole.storage.createFile({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
  file: "file_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### file: `string`<a id="file-string"></a>

Binary file. Appwrite SDKs provide helpers to handle file input. [Learn about file input](https://appwrite.io/docs/storage#file-input).

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, only the current user is granted all permissions. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.deleteBucketById`<a id="appwriteconsolestoragedeletebucketbyid"></a>

Delete a storage bucket by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteBucketByIdResponse = await appwriteconsole.storage.deleteBucketById(
  {
    bucketId: "bucketId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Bucket unique ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.deleteFileById`<a id="appwriteconsolestoragedeletefilebyid"></a>

Delete a file by its unique ID. Only users with write permissions have access to delete this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteFileByIdResponse = await appwriteconsole.storage.deleteFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.getBucket`<a id="appwriteconsolestoragegetbucket"></a>

Get a storage bucket by its unique ID. This endpoint response returns a JSON object with the storage bucket metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBucketResponse = await appwriteconsole.storage.getBucket({
  bucketId: "bucketId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Bucket unique ID.

#### 🔄 Return<a id="🔄-return"></a>

[Bucket](./models/bucket.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.getBucketUsageStats`<a id="appwriteconsolestoragegetbucketusagestats"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBucketUsageStatsResponse =
  await appwriteconsole.storage.getBucketUsageStats({
    bucketId: "bucketId_example",
    range: "30d",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Bucket ID.

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageBuckets](./models/usage-buckets.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/{bucketId}/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.getDownloadFile`<a id="appwriteconsolestoragegetdownloadfile"></a>

Get a file content by its unique ID. The endpoint response return with a 'Content-Disposition: attachment' header that tells the browser to start downloading the file to user downloads directory.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDownloadFileResponse = await appwriteconsole.storage.getDownloadFile({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/download` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.getFileById`<a id="appwriteconsolestoragegetfilebyid"></a>

Get a file by its unique ID. This endpoint response returns a JSON object with the file metadata.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileByIdResponse = await appwriteconsole.storage.getFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.getFilePreviewImage`<a id="appwriteconsolestoragegetfilepreviewimage"></a>

Get a file preview image. Currently, this method supports preview for image files (jpg, png, and gif), other supported formats, like pdf, docs, slides, and spreadsheets, will return the file icon image. You can also pass query string arguments for cutting and resizing your preview image. Preview is supported only for image files smaller than 10MB.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilePreviewImageResponse =
  await appwriteconsole.storage.getFilePreviewImage({
    bucketId: "bucketId_example",
    fileId: "fileId_example",
    width: 0,
    height: 0,
    gravity: "center",
    quality: 100,
    borderWidth: 0,
    borderColor: "",
    borderRadius: 0,
    opacity: 1,
    rotation: 0,
    background: "",
    output: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID

##### width: `number`<a id="width-number"></a>

Resize preview image width, Pass an integer between 0 to 4000.

##### height: `number`<a id="height-number"></a>

Resize preview image height, Pass an integer between 0 to 4000.

##### gravity: `'center' | 'top-left' | 'top' | 'top-right' | 'left' | 'right' | 'bottom-left' | 'bottom' | 'bottom-right'`<a id="gravity-center--top-left--top--top-right--left--right--bottom-left--bottom--bottom-right"></a>

Image crop gravity. Can be one of center,top-left,top,top-right,left,right,bottom-left,bottom,bottom-right

##### quality: `number`<a id="quality-number"></a>

Preview image quality. Pass an integer between 0 to 100. Defaults to 100.

##### borderWidth: `number`<a id="borderwidth-number"></a>

Preview image border in pixels. Pass an integer between 0 to 100. Defaults to 0.

##### borderColor: `string`<a id="bordercolor-string"></a>

Preview image border color. Use a valid HEX color, no # is needed for prefix.

##### borderRadius: `number`<a id="borderradius-number"></a>

Preview image border radius in pixels. Pass an integer between 0 to 4000.

##### opacity: `number`<a id="opacity-number"></a>

Preview image opacity. Only works with images having an alpha channel (like png). Pass a number between 0 to 1.

##### rotation: `number`<a id="rotation-number"></a>

Preview image rotation in degrees. Pass an integer between -360 and 360.

##### background: `string`<a id="background-string"></a>

Preview image background color. Only works with transparent images (png). Use a valid HEX color, no # is needed for prefix.

##### output: `'jpg' | 'jpeg' | 'gif' | 'png' | 'webp'`<a id="output-jpg--jpeg--gif--png--webp"></a>

Output format type (jpeg, jpg, png, gif and webp).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/preview` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.getFileView`<a id="appwriteconsolestoragegetfileview"></a>

Get a file content by its unique ID. This endpoint is similar to the download method but returns with no  'Content-Disposition: attachment' header.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFileViewResponse = await appwriteconsole.storage.getFileView({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}/view` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.getUsageStats`<a id="appwriteconsolestoragegetusagestats"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageStatsResponse = await appwriteconsole.storage.getUsageStats({
  range: "30d",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageStorage](./models/usage-storage.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.listBuckets`<a id="appwriteconsolestoragelistbuckets"></a>

Get a list of all the storage buckets. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listBucketsResponse = await appwriteconsole.storage.listBuckets({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: enabled, name, fileSecurity, maximumFileSize, encryption, antivirus

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[BucketList](./models/bucket-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.listFiles`<a id="appwriteconsolestoragelistfiles"></a>

Get a list of all the user files. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilesResponse = await appwriteconsole.storage.listFiles({
  bucketId: "bucketId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, signature, mimeType, sizeOriginal, chunksTotal, chunksUploaded

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[FileList](./models/file-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.updateBucketById`<a id="appwriteconsolestorageupdatebucketbyid"></a>

Update a storage bucket by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateBucketByIdResponse = await appwriteconsole.storage.updateBucketById(
  {
    bucketId: "bucketId_example",
    name: "name_example",
    compression: "none",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Bucket name

##### bucketId: `string`<a id="bucketid-string"></a>

Bucket unique ID.

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission strings. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### fileSecurity: `boolean`<a id="filesecurity-boolean"></a>

Enables configuring permissions for individual file. A user needs one of file or bucket level permissions to access a file. [Learn more about permissions](https://appwrite.io/docs/permissions).

##### enabled: `boolean`<a id="enabled-boolean"></a>

Is bucket enabled? When set to \\\'disabled\\\', users cannot access the files in this bucket but Server SDKs with and API key can still access the bucket. No files are lost when this is toggled.

##### maximumFileSize: `number`<a id="maximumfilesize-number"></a>

Maximum file size allowed in bytes. Maximum allowed value is 30MB.

##### allowedFileExtensions: `string`[]<a id="allowedfileextensions-string"></a>

Allowed file extensions. Maximum of 100 extensions are allowed, each 64 characters long.

##### compression: `string`<a id="compression-string"></a>

Compression algorithm choosen for compression. Can be one of none, [gzip](https://en.wikipedia.org/wiki/Gzip), or [zstd](https://en.wikipedia.org/wiki/Zstd), For file size above 20MB compression is skipped even if it\\\'s enabled

##### encryption: `boolean`<a id="encryption-boolean"></a>

Is encryption enabled? For file size above 20MB encryption is skipped even if it\\\'s enabled

##### antivirus: `boolean`<a id="antivirus-boolean"></a>

Is virus scanning enabled? For file size above 20MB AntiVirus scanning is skipped even if it\\\'s enabled

#### 🔄 Return<a id="🔄-return"></a>

[Bucket](./models/bucket.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.storage.updateFileById`<a id="appwriteconsolestorageupdatefilebyid"></a>

Update a file by its unique ID. Only users with write permissions have access to update this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateFileByIdResponse = await appwriteconsole.storage.updateFileById({
  bucketId: "bucketId_example",
  fileId: "fileId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### bucketId: `string`<a id="bucketid-string"></a>

Storage bucket unique ID. You can create a new storage bucket using the Storage service [server integration](https://appwrite.io/docs/server/storage#createBucket).

##### fileId: `string`<a id="fileid-string"></a>

File unique ID.

##### name: `string`<a id="name-string"></a>

Name of the file

##### permissions: `string`[]<a id="permissions-string"></a>

An array of permission string. By default, the current permissions are inherited. [Learn more about permissions](https://appwrite.io/docs/permissions).

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/storage/buckets/{bucketId}/files/{fileId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.createMembership`<a id="appwriteconsoleteamscreatemembership"></a>

Invite a new member to join your team. Provide an ID for existing users, or invite unregistered users using an email or phone number. If initiated from a Client SDK, Appwrite will send an email or sms with a link to join the team to the invited user, and an account will be created for them if one doesn't exist. If initiated from a Server SDK, the new member will be added automatically to the team.

You only need to provide one of a user ID, email, or phone number. Appwrite will prioritize accepting the user ID > email > phone number if you provide more than one of these parameters.

Use the `url` parameter to redirect the user from the invitation email to your app. After the user is redirected, use the [Update Team Membership Status](https://appwrite.io/docs/references/cloud/client-web/teams#updateMembershipStatus) endpoint to allow the user to accept the invitation to the team. 

Please note that to avoid a [Redirect Attack](https://github.com/OWASP/CheatSheetSeries/blob/master/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.md) Appwrite will accept the only redirect URLs under the domains you have added as a platform on the Appwrite Console.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMembershipResponse = await appwriteconsole.teams.createMembership({
  teamId: "teamId_example",
  roles: ["roles_example"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### roles: `string`[]<a id="roles-string"></a>

Array of strings. Use this param to set the user roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### email: `string`<a id="email-string"></a>

Email of the new team member.

##### userId: `string`<a id="userid-string"></a>

ID of the user to be added to a team.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### url: `string`<a id="url-string"></a>

URL to redirect the user back to your app from the invitation email.  Only URLs from hostnames in your project platform list are allowed. This requirement helps to prevent an [open redirect](https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html) attack against your project API.

##### name: `string`<a id="name-string"></a>

Name of the new team member. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.createTeam`<a id="appwriteconsoleteamscreateteam"></a>

Create a new team. The user who creates the team will automatically be assigned as the owner of the team. Only the users with the owner role can invite new members, add new owners and delete or update the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTeamResponse = await appwriteconsole.teams.createTeam({
  teamId: "teamId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### name: `string`<a id="name-string"></a>

Team name. Max length: 128 chars.

##### roles: `string`[]<a id="roles-string"></a>

Array of strings. Use this param to set the roles in the team for the user who created it. The default role is **owner**. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.getById`<a id="appwriteconsoleteamsgetbyid"></a>

Get a team by its ID. All team members have read access for this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getByIdResponse = await appwriteconsole.teams.getById({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.getFilteredTeams`<a id="appwriteconsoleteamsgetfilteredteams"></a>

Get a list of all the teams in which the current user is a member. You can use the parameters to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilteredTeamsResponse = await appwriteconsole.teams.getFilteredTeams({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, total, billingPlan

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[TeamList](./models/team-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.getMembership`<a id="appwriteconsoleteamsgetmembership"></a>

Get a team member by the membership unique id. All team members have read access for this resource.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipResponse = await appwriteconsole.teams.getMembership({
  teamId: "teamId_example",
  membershipId: "membershipId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.getPrefs`<a id="appwriteconsoleteamsgetprefs"></a>

Get the team's shared preferences by its unique ID. If a preference doesn't need to be shared by all team members, prefer storing them in [user preferences](https://appwrite.io/docs/references/cloud/client-web/account#getPrefs).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPrefsResponse = await appwriteconsole.teams.getPrefs({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.listLogs`<a id="appwriteconsoleteamslistlogs"></a>

Get the team activity logs list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLogsResponse = await appwriteconsole.teams.listLogs({
  teamId: "teamId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.listMemberships`<a id="appwriteconsoleteamslistmemberships"></a>

Use this endpoint to list a team's members using the team's ID. All team members have read access to this endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMembershipsResponse = await appwriteconsole.teams.listMemberships({
  teamId: "teamId_example",
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, teamId, invited, joined, confirm

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipList](./models/membership-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.removeById`<a id="appwriteconsoleteamsremovebyid"></a>

Delete a team using its ID. Only team members with the owner role can delete the team.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeByIdResponse = await appwriteconsole.teams.removeById({
  teamId: "teamId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.removeMembership`<a id="appwriteconsoleteamsremovemembership"></a>

This endpoint allows a user to leave a team or for a team owner to delete the membership of any other team member. You can also use this endpoint to delete a user membership even if it is not accepted.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMembershipResponse = await appwriteconsole.teams.removeMembership({
  teamId: "teamId_example",
  membershipId: "membershipId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.updateMembershipRoles`<a id="appwriteconsoleteamsupdatemembershiproles"></a>

Modify the roles of a team member. Only team members with the owner role have access to this endpoint. Learn more about [roles and permissions](https://appwrite.io/docs/permissions).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipRolesResponse =
  await appwriteconsole.teams.updateMembershipRoles({
    teamId: "teamId_example",
    membershipId: "membershipId_example",
    roles: ["roles_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### roles: `string`[]<a id="roles-string"></a>

An array of strings. Use this param to set the user\\\'s roles in the team. A role can be any string. Learn more about [roles and permissions](https://appwrite.io/docs/permissions). Maximum of 100 roles are allowed, each 32 characters long.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.updateMembershipStatus`<a id="appwriteconsoleteamsupdatemembershipstatus"></a>

Use this endpoint to allow a user to accept an invitation to join a team after being redirected back to your app from the invitation email received by the user.

If the request is successful, a session for the user is automatically created.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMembershipStatusResponse =
  await appwriteconsole.teams.updateMembershipStatus({
    teamId: "teamId_example",
    membershipId: "membershipId_example",
    userId: "userId_example",
    secret: "secret_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### secret: `string`<a id="secret-string"></a>

Secret key.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

##### membershipId: `string`<a id="membershipid-string"></a>

Membership ID.

#### 🔄 Return<a id="🔄-return"></a>

[Membership](./models/membership.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/memberships/{membershipId}/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.updateNameById`<a id="appwriteconsoleteamsupdatenamebyid"></a>

Update the team's name by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdResponse = await appwriteconsole.teams.updateNameById({
  teamId: "teamId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

New team name. Max length: 128 chars.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🔄 Return<a id="🔄-return"></a>

[Team](./models/team.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.teams.updatePrefsById`<a id="appwriteconsoleteamsupdateprefsbyid"></a>

Update the team's preferences by its unique ID. The object you pass is stored as is and replaces any previous value. The maximum allowed prefs size is 64kB and throws an error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsByIdResponse = await appwriteconsole.teams.updatePrefsById({
  teamId: "teamId_example",
  prefs: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

##### teamId: `string`<a id="teamid-string"></a>

Team ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/teams/{teamId}/prefs` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createArgonUser`<a id="appwriteconsoleuserscreateargonuser"></a>

Create a new user. Password provided must be hashed with the [Argon2](https://en.wikipedia.org/wiki/Argon2) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createArgonUserResponse = await appwriteconsole.users.createArgonUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Argon2.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/argon2` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createBcryptPassword`<a id="appwriteconsoleuserscreatebcryptpassword"></a>

Create a new user. Password provided must be hashed with the [Bcrypt](https://en.wikipedia.org/wiki/Bcrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createBcryptPasswordResponse =
  await appwriteconsole.users.createBcryptPassword({
    userId: "userId_example",
    email: "email_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Bcrypt.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/bcrypt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createMD5User`<a id="appwriteconsoleuserscreatemd5user"></a>

Create a new user. Password provided must be hashed with the [MD5](https://en.wikipedia.org/wiki/MD5) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMD5UserResponse = await appwriteconsole.users.createMD5User({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using MD5.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/md5` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createMessagingTarget`<a id="appwriteconsoleuserscreatemessagingtarget"></a>

Create a messaging target.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMessagingTargetResponse =
  await appwriteconsole.users.createMessagingTarget({
    userId: "userId_example",
    targetId: "targetId_example",
    providerType: "email",
    identifier: "identifier_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### targetId: `string`<a id="targetid-string"></a>

Target ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### providerType: `string`<a id="providertype-string"></a>

The target provider type. Can be one of the following: `email`, `sms` or `push`.

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### userId: `string`<a id="userid-string"></a>

User ID.

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.

##### name: `string`<a id="name-string"></a>

Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createMfaRecoveryCodes`<a id="appwriteconsoleuserscreatemfarecoverycodes"></a>

Generate recovery codes used as backup for MFA flow for User ID. Recovery codes can be used as a MFA verification type in [createMfaChallenge](/docs/references/cloud/client-web/account#createMfaChallenge) method by client SDK.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMfaRecoveryCodesResponse =
  await appwriteconsole.users.createMfaRecoveryCodes({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/recovery-codes` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createNewUser`<a id="appwriteconsoleuserscreatenewuser"></a>

Create a new user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewUserResponse = await appwriteconsole.users.createNewUser({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### phone: `string`<a id="phone-string"></a>

Phone number. Format this number with a leading \\\'+\\\' and a country code, e.g., +16175551212.

##### password: `string`<a id="password-string"></a>

Plain text user password. Must be at least 8 chars.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createScryptModifiedUser`<a id="appwriteconsoleuserscreatescryptmodifieduser"></a>

Create a new user. Password provided must be hashed with the [Scrypt Modified](https://gist.github.com/Meldiron/eecf84a0225eccb5a378d45bb27462cc) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createScryptModifiedUserResponse =
  await appwriteconsole.users.createScryptModifiedUser({
    userId: "userId_example",
    email: "email_example",
    password: "password_example",
    passwordSalt: "passwordSalt_example",
    passwordSaltSeparator: "passwordSaltSeparator_example",
    passwordSignerKey: "passwordSignerKey_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Scrypt Modified.

##### passwordSalt: `string`<a id="passwordsalt-string"></a>

Salt used to hash password.

##### passwordSaltSeparator: `string`<a id="passwordsaltseparator-string"></a>

Salt separator used to hash password.

##### passwordSignerKey: `string`<a id="passwordsignerkey-string"></a>

Signer key used to hash password.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/scrypt-modified` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createScryptUser`<a id="appwriteconsoleuserscreatescryptuser"></a>

Create a new user. Password provided must be hashed with the [Scrypt](https://github.com/Tarsnap/scrypt) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createScryptUserResponse = await appwriteconsole.users.createScryptUser({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
  passwordSalt: "passwordSalt_example",
  passwordCpu: 1,
  passwordMemory: 1,
  passwordParallel: 1,
  passwordLength: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using Scrypt.

##### passwordSalt: `string`<a id="passwordsalt-string"></a>

Optional salt used to hash password.

##### passwordCpu: `number`<a id="passwordcpu-number"></a>

Optional CPU cost used to hash password.

##### passwordMemory: `number`<a id="passwordmemory-number"></a>

Optional memory cost used to hash password.

##### passwordParallel: `number`<a id="passwordparallel-number"></a>

Optional parallelization cost used to hash password.

##### passwordLength: `number`<a id="passwordlength-number"></a>

Optional hash length used to hash password.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/scrypt` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createSession`<a id="appwriteconsoleuserscreatesession"></a>

Creates a session for a user. Returns an immediately usable session object.

If you want to generate a token for a custom authentication flow, use the [POST /users/{userId}/tokens](https://appwrite.io/docs/server/users#createToken) endpoint.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createSessionResponse = await appwriteconsole.users.createSession({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\'t start with a special char. Max length is 36 chars.

#### 🔄 Return<a id="🔄-return"></a>

[Session](./models/session.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createWithPHPass`<a id="appwriteconsoleuserscreatewithphpass"></a>

Create a new user. Password provided must be hashed with the [PHPass](https://www.openwall.com/phpass/) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWithPHPassResponse = await appwriteconsole.users.createWithPHPass({
  userId: "userId_example",
  email: "email_example",
  password: "password_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or pass the string `ID.unique()`to auto generate it. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using PHPass.

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/phpass` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.createWithShaPassword`<a id="appwriteconsoleuserscreatewithshapassword"></a>

Create a new user. Password provided must be hashed with the [SHA](https://en.wikipedia.org/wiki/Secure_Hash_Algorithm) algorithm. Use the [POST /users](https://appwrite.io/docs/server/users#usersCreate) endpoint to create users with a plain text password.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createWithShaPasswordResponse =
  await appwriteconsole.users.createWithShaPassword({
    userId: "userId_example",
    email: "email_example",
    password: "password_example",
    passwordVersion: "sha1",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID. Choose a custom ID or generate a random ID with `ID.unique()`. Valid chars are a-z, A-Z, 0-9, period, hyphen, and underscore. Can\\\'t start with a special char. Max length is 36 chars.

##### email: `string`<a id="email-string"></a>

User email.

##### password: `string`<a id="password-string"></a>

User password hashed using SHA.

##### passwordVersion: `string`<a id="passwordversion-string"></a>

Optional SHA version used to hash password. Allowed values are: \\\'sha1\\\', \\\'sha224\\\', \\\'sha256\\\', \\\'sha384\\\', \\\'sha512/224\\\', \\\'sha512/256\\\', \\\'sha512\\\', \\\'sha3-224\\\', \\\'sha3-256\\\', \\\'sha3-384\\\', \\\'sha3-512\\\'

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/sha` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.deleteAuthenticator`<a id="appwriteconsoleusersdeleteauthenticator"></a>

Delete an authenticator app.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteAuthenticatorResponse =
  await appwriteconsole.users.deleteAuthenticator({
    userId: "userId_example",
    type: "totp",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### type: `'totp'`<a id="type-totp"></a>

Type of authenticator.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/authenticators/{type}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.deleteById`<a id="appwriteconsoleusersdeletebyid"></a>

Delete a user by its unique ID, thereby releasing it's ID. Since ID is released and can be reused, all user-related resources like documents or storage files should be deleted before user deletion. If you want to keep ID reserved, use the [updateStatus](https://appwrite.io/docs/server/users#usersUpdateStatus) endpoint instead.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await appwriteconsole.users.deleteById({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.deleteIdentityById`<a id="appwriteconsoleusersdeleteidentitybyid"></a>

Delete an identity by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteIdentityByIdResponse =
  await appwriteconsole.users.deleteIdentityById({
    identityId: "identityId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### identityId: `string`<a id="identityid-string"></a>

Identity ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/identities/{identityId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.deleteSessionByUserIdAndSessionId`<a id="appwriteconsoleusersdeletesessionbyuseridandsessionid"></a>

Delete a user sessions by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSessionByUserIdAndSessionIdResponse =
  await appwriteconsole.users.deleteSessionByUserIdAndSessionId({
    userId: "userId_example",
    sessionId: "sessionId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### sessionId: `string`<a id="sessionid-string"></a>

Session ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions/{sessionId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.deleteSessionsById`<a id="appwriteconsoleusersdeletesessionsbyid"></a>

Delete all user's sessions by using the user's unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteSessionsByIdResponse =
  await appwriteconsole.users.deleteSessionsById({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.deleteTargetMessaging`<a id="appwriteconsoleusersdeletetargetmessaging"></a>

Delete a messaging target.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteTargetMessagingResponse =
  await appwriteconsole.users.deleteTargetMessaging({
    userId: "userId_example",
    targetId: "targetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets/{targetId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.generateToken`<a id="appwriteconsoleusersgeneratetoken"></a>

Returns a token with a secret key for creating a session. If the provided user ID has not be registered, a new user will be created. Use the returned user ID and secret and submit a request to the [PUT /account/sessions/custom](https://appwrite.io/docs/references/cloud/client-web/account#updateCustomSession) endpoint to complete the login process.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateTokenResponse = await appwriteconsole.users.generateToken({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### length: `number`<a id="length-number"></a>

Token length in characters. The default length is 6 characters

##### expire: `number`<a id="expire-number"></a>

Token expiration period in seconds. The default expiration is 15 minutes.

#### 🔄 Return<a id="🔄-return"></a>

[Token](./models/token.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/tokens` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.getLogsByUserId`<a id="appwriteconsoleusersgetlogsbyuserid"></a>

Get the user activity logs list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLogsByUserIdResponse = await appwriteconsole.users.getLogsByUserId({
  userId: "userId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Only supported methods are limit and offset

#### 🔄 Return<a id="🔄-return"></a>

[LogList](./models/log-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/logs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.getMembershipsById`<a id="appwriteconsoleusersgetmembershipsbyid"></a>

Get the user membership list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembershipsByIdResponse =
  await appwriteconsole.users.getMembershipsById({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MembershipList](./models/membership-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.getMfaRecoveryCodes`<a id="appwriteconsoleusersgetmfarecoverycodes"></a>

Get recovery codes that can be used as backup for MFA flow by User ID. Before getting codes, they must be generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMfaRecoveryCodesResponse =
  await appwriteconsole.users.getMfaRecoveryCodes({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/recovery-codes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.getTarget`<a id="appwriteconsoleusersgettarget"></a>

Get a user's push notification target by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTargetResponse = await appwriteconsole.users.getTarget({
  userId: "userId_example",
  targetId: "targetId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets/{targetId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.getUsageStats`<a id="appwriteconsoleusersgetusagestats"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUsageStatsResponse = await appwriteconsole.users.getUsageStats({
  range: "30d",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### range: `'24h' | '30d' | '90d'`<a id="range-24h--30d--90d"></a>

Date range.

#### 🔄 Return<a id="🔄-return"></a>

[UsageUsers](./models/usage-users.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/usage` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.getUserById`<a id="appwriteconsoleusersgetuserbyid"></a>

Get a user by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserByIdResponse = await appwriteconsole.users.getUserById({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.getUserPrefsById`<a id="appwriteconsoleusersgetuserprefsbyid"></a>

Get the user preferences by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPrefsByIdResponse = await appwriteconsole.users.getUserPrefsById({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/prefs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.listFilteredUsers`<a id="appwriteconsoleuserslistfilteredusers"></a>

Get a list of all the project's users. You can use the query params to filter your results.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listFilteredUsersResponse = await appwriteconsole.users.listFilteredUsers(
  {
    queries: [],
    search: "",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[UserList](./models/user-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.listIdentities`<a id="appwriteconsoleuserslistidentities"></a>

Get identities for all users.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listIdentitiesResponse = await appwriteconsole.users.listIdentities({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: userId, provider, providerUid, providerEmail, providerAccessTokenExpiry

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[IdentityList](./models/identity-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/identities` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.listMfaFactors`<a id="appwriteconsoleuserslistmfafactors"></a>

List the factors available on the account to be used as a MFA challange.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listMfaFactorsResponse = await appwriteconsole.users.listMfaFactors({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaFactors](./models/mfa-factors.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/factors` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.listSessionsByUserId`<a id="appwriteconsoleuserslistsessionsbyuserid"></a>

Get the user sessions list by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSessionsByUserIdResponse =
  await appwriteconsole.users.listSessionsByUserId({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[SessionList](./models/session-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/sessions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.listTargets`<a id="appwriteconsoleuserslisttargets"></a>

List the messaging targets that are associated with a user.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTargetsResponse = await appwriteconsole.users.listTargets({
  userId: "userId_example",
  queries: [],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: name, email, phone, status, passwordUpdate, registration, emailVerification, phoneVerification, labels

#### 🔄 Return<a id="🔄-return"></a>

[TargetList](./models/target-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.regenerateMfaRecoveryCodesByUserId`<a id="appwriteconsoleusersregeneratemfarecoverycodesbyuserid"></a>

Regenerate recovery codes that can be used as backup for MFA flow by User ID. Before regenerating codes, they must be first generated using [createMfaRecoveryCodes](/docs/references/cloud/client-web/account#createMfaRecoveryCodes) method.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const regenerateMfaRecoveryCodesByUserIdResponse =
  await appwriteconsole.users.regenerateMfaRecoveryCodesByUserId({
    userId: "userId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[MfaRecoveryCodes](./models/mfa-recovery-codes.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa/recovery-codes` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updateEmailById`<a id="appwriteconsoleusersupdateemailbyid"></a>

Update the user email by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailByIdResponse = await appwriteconsole.users.updateEmailById({
  userId: "userId_example",
  email: "email_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

User email.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/email` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updateEmailVerificationStatus`<a id="appwriteconsoleusersupdateemailverificationstatus"></a>

Update the user email verification status by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmailVerificationStatusResponse =
  await appwriteconsole.users.updateEmailVerificationStatus({
    userId: "userId_example",
    emailVerification: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### emailVerification: `boolean`<a id="emailverification-boolean"></a>

User email verification status.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/verification` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updateLabelsByUserId`<a id="appwriteconsoleusersupdatelabelsbyuserid"></a>

Update the user labels by its unique ID. 

Labels can be used to grant access to resources. While teams are a way for user's to share access to a resource, labels can be defined by the developer to grant access without an invitation. See the [Permissions docs](https://appwrite.io/docs/permissions) for more info.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateLabelsByUserIdResponse =
  await appwriteconsole.users.updateLabelsByUserId({
    userId: "userId_example",
    labels: ["labels_example"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### labels: `string`[]<a id="labels-string"></a>

Array of user labels. Replaces the previous labels. Maximum of 1000 labels are allowed, each up to 36 alphanumeric characters long.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/labels` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updateMessagingTarget`<a id="appwriteconsoleusersupdatemessagingtarget"></a>

Update a messaging target.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMessagingTargetResponse =
  await appwriteconsole.users.updateMessagingTarget({
    userId: "userId_example",
    targetId: "targetId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID.

##### targetId: `string`<a id="targetid-string"></a>

Target ID.

##### identifier: `string`<a id="identifier-string"></a>

The target identifier (token, email, phone etc.)

##### providerId: `string`<a id="providerid-string"></a>

Provider ID. Message will be sent to this target from the specified provider ID. If no provider ID is set the first setup provider will be used.

##### name: `string`<a id="name-string"></a>

Target name. Max length: 128 chars. For example: My Awesome App Galaxy S23.

#### 🔄 Return<a id="🔄-return"></a>

[Target](./models/target.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/targets/{targetId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updateMfaStatus`<a id="appwriteconsoleusersupdatemfastatus"></a>

Enable or disable MFA on a user account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateMfaStatusResponse = await appwriteconsole.users.updateMfaStatus({
  userId: "userId_example",
  mfa: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### mfa: `boolean`<a id="mfa-boolean"></a>

Enable or disable MFA.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/mfa` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updateNameById`<a id="appwriteconsoleusersupdatenamebyid"></a>

Update the user name by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateNameByIdResponse = await appwriteconsole.users.updateNameById({
  userId: "userId_example",
  name: "name_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

User name. Max length: 128 chars.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/name` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updatePasswordByUserId`<a id="appwriteconsoleusersupdatepasswordbyuserid"></a>

Update the user password by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePasswordByUserIdResponse =
  await appwriteconsole.users.updatePasswordByUserId({
    userId: "userId_example",
    password: "password_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### password: `string`<a id="password-string"></a>

New user password. Must be at least 8 chars.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/password` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updatePhoneByUserId`<a id="appwriteconsoleusersupdatephonebyuserid"></a>

Update the user phone by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneByUserIdResponse =
  await appwriteconsole.users.updatePhoneByUserId({
    userId: "userId_example",
    number: "number_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### number: `string`<a id="number-string"></a>

User phone number.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/phone` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updatePhoneVerification`<a id="appwriteconsoleusersupdatephoneverification"></a>

Update the user phone verification status by its unique ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePhoneVerificationResponse =
  await appwriteconsole.users.updatePhoneVerification({
    userId: "userId_example",
    phoneVerification: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### phoneVerification: `boolean`<a id="phoneverification-boolean"></a>

User phone verification status.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/verification/phone` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updatePrefsById`<a id="appwriteconsoleusersupdateprefsbyid"></a>

Update the user preferences by its unique ID. The object you pass is stored as is, and replaces any previous value. The maximum allowed prefs size is 64kB and throws error if exceeded.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updatePrefsByIdResponse = await appwriteconsole.users.updatePrefsById({
  userId: "userId_example",
  prefs: {},
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### prefs: `object`<a id="prefs-object"></a>

Prefs key-value JSON object.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/prefs` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.users.updateStatusByUserId`<a id="appwriteconsoleusersupdatestatusbyuserid"></a>

Update the user status by its unique ID. Use this endpoint as an alternative to deleting a user if you want to keep user's ID reserved.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateStatusByUserIdResponse =
  await appwriteconsole.users.updateStatusByUserId({
    userId: "userId_example",
    status: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `boolean`<a id="status-boolean"></a>

User Status. To activate the user pass `true` and to block the user pass `false`.

##### userId: `string`<a id="userid-string"></a>

User ID.

#### 🔄 Return<a id="🔄-return"></a>

[User](./models/user.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/users/{userId}/status` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.authorizeExternalDeployment`<a id="appwriteconsolevcsauthorizeexternaldeployment"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const authorizeExternalDeploymentResponse =
  await appwriteconsole.vcs.authorizeExternalDeployment({
    installationId: "installationId_example",
    repositoryId: "repositoryId_example",
    providerPullRequestId: "providerPullRequestId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### providerPullRequestId: `string`<a id="providerpullrequestid-string"></a>

GitHub Pull Request Id

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

##### repositoryId: `string`<a id="repositoryid-string"></a>

VCS Repository Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/github/installations/{installationId}/repositories/{repositoryId}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.createProviderRepository`<a id="appwriteconsolevcscreateproviderrepository"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createProviderRepositoryResponse =
  await appwriteconsole.vcs.createProviderRepository({
    installationId: "installationId_example",
    name: "name_example",
    _private: true,
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

Repository name (slug)

##### private: `boolean`<a id="private-boolean"></a>

Mark repository public or private

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

#### 🔄 Return<a id="🔄-return"></a>

[ProviderRepository](./models/provider-repository.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/github/installations/{installationId}/providerRepositories` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.deleteInstallation`<a id="appwriteconsolevcsdeleteinstallation"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteInstallationResponse = await appwriteconsole.vcs.deleteInstallation(
  {
    installationId: "installationId_example",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/installations/{installationId}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.detectRuntimeSettings`<a id="appwriteconsolevcsdetectruntimesettings"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const detectRuntimeSettingsResponse =
  await appwriteconsole.vcs.detectRuntimeSettings({
    installationId: "installationId_example",
    providerRepositoryId: "providerRepositoryId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

##### providerRepositoryId: `string`<a id="providerrepositoryid-string"></a>

Repository Id

##### providerRootDirectory: `string`<a id="providerrootdirectory-string"></a>

Path to Root Directory

#### 🔄 Return<a id="🔄-return"></a>

[Detection](./models/detection.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/detection` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.getInstallationById`<a id="appwriteconsolevcsgetinstallationbyid"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getInstallationByIdResponse =
  await appwriteconsole.vcs.getInstallationById({
    installationId: "installationId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

#### 🔄 Return<a id="🔄-return"></a>

[Installation](./models/installation.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/installations/{installationId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.getRepository`<a id="appwriteconsolevcsgetrepository"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRepositoryResponse = await appwriteconsole.vcs.getRepository({
  installationId: "installationId_example",
  providerRepositoryId: "providerRepositoryId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

##### providerRepositoryId: `string`<a id="providerrepositoryid-string"></a>

Repository Id

#### 🔄 Return<a id="🔄-return"></a>

[ProviderRepository](./models/provider-repository.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.listInstallations`<a id="appwriteconsolevcslistinstallations"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listInstallationsResponse = await appwriteconsole.vcs.listInstallations({
  queries: [],
  search: "",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### queries: `string`[]<a id="queries-string"></a>

Array of query strings generated using the Query class provided by the SDK. [Learn more about queries](https://appwrite.io/docs/queries). Maximum of 100 queries are allowed, each 4096 characters long. You may filter on the following attributes: provider, organization

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[InstallationList](./models/installation-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/installations` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.listProviderRepositories`<a id="appwriteconsolevcslistproviderrepositories"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listProviderRepositoriesResponse =
  await appwriteconsole.vcs.listProviderRepositories({
    installationId: "installationId_example",
    search: "",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

##### search: `string`<a id="search-string"></a>

Search term to filter your list results. Max length: 256 chars.

#### 🔄 Return<a id="🔄-return"></a>

[ProviderRepositoryList](./models/provider-repository-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/github/installations/{installationId}/providerRepositories` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `appwriteconsole.vcs.listRepositoryBranches`<a id="appwriteconsolevcslistrepositorybranches"></a>



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRepositoryBranchesResponse =
  await appwriteconsole.vcs.listRepositoryBranches({
    installationId: "installationId_example",
    providerRepositoryId: "providerRepositoryId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### installationId: `string`<a id="installationid-string"></a>

Installation Id

##### providerRepositoryId: `string`<a id="providerrepositoryid-string"></a>

Repository Id

#### 🔄 Return<a id="🔄-return"></a>

[BranchList](./models/branch-list.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/vcs/github/installations/{installationId}/providerRepositories/{providerRepositoryId}/branches` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
