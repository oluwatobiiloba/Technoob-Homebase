const express = require('express');
const router = express.Router();
const controller = require('../controllers/index');
const admin = controller.admin;
const middleware = require('../middleware/index');

// middleware function to remove sanitizer for mail template routes
const sanitizeIfNeeded = (req, res, next) => {
  if (req.path.startsWith('/email/template')) {
    return next();
  } else {
    return middleware.sanitizer.sanitize(req, res, next);
  }
};

router.use(sanitizeIfNeeded);
router.get('/contributors', admin.getContributors);
router.post('/contributors/add', middleware.auth.isAuthenticated,middleware.auth.hasPermission('admin:AddContributors'),admin.addContributors);
router.get('/dashboard', middleware.auth.isAuthenticated, admin.dashboard);
router.get('/dashboard/traffic', middleware.auth.isAuthenticated, admin.traffic);
router.post('/email/template', middleware.auth.hasPermission('admin:ManageEmailTemplates'), admin.saveMailTemplate);
router.get('/email/template', middleware.auth.hasPermission('admin:ManageEmailTemplates'), admin.getMailTemplates);
router.get('/email/template/:id', middleware.auth.hasPermission('admin:ManageEmailTemplates'), admin.getMailTemplate);
router.post('/email/many/dynamic', middleware.auth.hasPermission('admin:SendMailNotifications'), admin.sendNotificationEmail);
router.post('/email/many/static', middleware.auth.hasPermission('admin:SendMailNotifications'), admin.sendNotificationEmailStatic);
router.post('/invite', middleware.auth.hasPermission('admin:ManageAdmins'), admin.inviteAdmin);
router.post('/remove', middleware.auth.hasPermission('admin:ManageAdmins'), admin.removeAdmin);
router.get('/all', middleware.auth.hasPermission('admin:ManageAdmins'), admin.getAdmins);
router.get('/:id', middleware.auth.hasPermission('admin:ManageAdmins'), admin.getAdmin);
router.post('/permission/create', middleware.auth.hasPermission('admin:ManagePermissions'), admin.create_permission);
router.get('/permission/all', middleware.auth.hasPermission('admin:ManagePermissions'), admin.get_permissions);
router.get('/permission/:id', middleware.auth.hasPermission('admin:ManagePermissions'), admin.get_permission);
router.post('/permission/:id/delete', middleware.auth.hasPermission('admin:ManagePermissions'), admin.delete_permission);
router.post('/permission/:id/deactivate', middleware.auth.hasPermission('admin:ManagePermissions'), admin.deactivatePermission);
router.post('/permission/add', middleware.auth.hasPermission('admin:ManagePermissions'), admin.add_permission);
router.post('/permission/remove', middleware.auth.hasPermission('admin:ManagePermissions'), admin.remove_permission);
router.get('/mailing-list', middleware.auth.hasPermission('admin:ManageMailingList'), admin.getMailingList);
router.get('/contact-us', middleware.auth.hasPermission('admin:ManageContactUs'), admin.getContactUs);
router.post('/contact-us/:id/delete', middleware.auth.hasPermission('admin:ManageContactUs'), admin.deleteContactUs);
router.post('/mailing-list/:id/delete', middleware.auth.hasPermission('admin:ManageMailingList'), admin.deleteMailingList);
router.post('/frontend/resources/create', middleware.auth.hasPermission('admin:ManageFrontendResources'), admin.createFrontendResource);

module.exports = router;
