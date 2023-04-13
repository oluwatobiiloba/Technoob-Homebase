let express = require('express');
let router = express.Router();
let controller = require('../controllers/index');
let admin = controller.admin;
const middleware = require('../middleware/index');



router.post('/email/template', middleware.auth.hasPermission('admin:ManageEmailTemplates'), middleware.auth.isAuthenticated, admin.saveMailTemplate);
router.get('/email/template', middleware.auth.hasPermission('admin:ManageEmailTemplates'), middleware.auth.isAuthenticated, admin.getMailTemplates);
router.get('/email/template/:id', middleware.auth.hasPermission('admin:ManageEmailTemplates'), middleware.auth.isAuthenticated, admin.getMailTemplate);
router.post('/email/many/dynamic', middleware.auth.hasPermission('admin:SendMailNotifications'), middleware.auth.isAuthenticated, admin.sendNotificationEmail);
router.post('/email/many/static', middleware.auth.hasPermission('admin:SendMailNotifications'), middleware.auth.isAuthenticated, admin.sendNotificationEmailStatic);
router.post('/invite', middleware.auth.hasPermission('admin:ManageAdmins'), middleware.auth.isAuthenticated, admin.inviteAdmin);
router.post('/remove', middleware.auth.hasPermission('admin:ManageAdmins'), middleware.auth.isAuthenticated, admin.removeAdmin);
router.get('/all', middleware.auth.hasPermission('admin:ManageAdmins'), middleware.auth.isAuthenticated, admin.getAdmins);
router.get('/:id', middleware.auth.hasPermission('admin:ManageAdmins'), middleware.auth.isAuthenticated, admin.getAdmin)
router.post('/permission/create', middleware.auth.hasPermission('admin:ManagePermissions'), middleware.auth.isAuthenticated, admin.create_permission)
router.get('/permission/all', middleware.auth.hasPermission('admin:ManagePermissions'), middleware.auth.isAuthenticated, admin.get_permissions)
router.get('/permission/:id', middleware.auth.hasPermission('admin:ManagePermissions'), middleware.auth.isAuthenticated, admin.get_permission)
router.post('/permission/:id/delete', middleware.auth.hasPermission('admin:ManagePermissions'), middleware.auth.isAuthenticated, admin.delete_permission)
router.post('/permission/:id/deactivate', middleware.auth.hasPermission('admin:ManagePermissions'), middleware.auth.isAuthenticated, admin.deactivatePermission)
router.post('/permission/add', middleware.auth.hasPermission('admin:ManagePermissions'), middleware.auth.isAuthenticated, admin.add_permission)



module.exports = router;
