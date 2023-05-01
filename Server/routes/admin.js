const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const admin = controller.admin;
const middleware = require('../middleware/index');


// middleware function to remove saniter for mail template routes
const sanitizeIfNeeded = (req, res, next) => {
    if (req.path.startsWith('/email/template')) {
      return next();
    } else {
      return middleware.sanitizer.sanitize(req, res, next);
    }
};
  

router.use(sanitizeIfNeeded)

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
router.post('/permission/remove', middleware.auth.hasPermission('admin:ManagePermissions'), middleware.auth.isAuthenticated, admin.remove_permission)
router.get('/mailing-list', middleware.auth.hasPermission('admin:ManageMailingList'), middleware.auth.isAuthenticated, admin.getMailingList)
router.get('/contact-us', middleware.auth.hasPermission('admin:ManageContactUs'), middleware.auth.isAuthenticated, admin.getContactUs)
router.post('/contact-us/:id/delete', middleware.auth.hasPermission('admin:ManageContactUs'), middleware.auth.isAuthenticated, admin.deleteContactUs)
router.post('/mailing-list/:id/delete', middleware.auth.hasPermission('admin:ManageMailingList'), middleware.auth.isAuthenticated, admin.deleteMailingList)



module.exports = router;
