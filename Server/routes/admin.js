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

/** 
 * @swagger 
 * admin/dashboard: 
 *   get: 
 *     description: Use to request all customers
 *     produces:
 *      - application/json
 *    
 *     responses:
 *       '200':
 *         description: A successful response
 */  
router.get('/dashboard', middleware.auth.isAuthenticated, admin.dashboard);

/**
 * @swagger
 * admin/dashboard/traffic:
 *   get:
 *     description: Use to request traffic data
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/dashboard/traffic', middleware.auth.isAuthenticated, admin.traffic);

/**
 * @swagger
 * admin/email/template:
 *   post:
 *     description: Use to create a new email template
 *     responses:
 *       '200':
 *         description: A successful response
 */ 
router.post('/email/template', middleware.auth.hasPermission('admin:ManageEmailTemplates'), admin.saveMailTemplate);

/**
 * @swagger
 * admin/email/template:
 *   get:
 *     description: Use to get all email templates
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/email/template', middleware.auth.hasPermission('admin:ManageEmailTemplates'), admin.getMailTemplates);

/**
 * @swagger
 * admin/email/template/{id}:
 *   get:
 *     description: Use to get a single email template
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.get('/email/template/:id', middleware.auth.hasPermission('admin:ManageEmailTemplates'), admin.getMailTemplate);

/**
 * @swagger
 * admin/email/many/dynamic:
 *   post:
 *     description: Use to send email to many users
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.post('/email/many/dynamic', middleware.auth.hasPermission('admin:SendMailNotifications'), admin.sendNotificationEmail);

/**
 * @swagger
 * admin/email/many/static:
 *   post:
 *     description: Use to send email to many users
 *     responses:
 *       '200':
 *         description: A successful response
 */ 
router.post('/email/many/static', middleware.auth.hasPermission('admin:SendMailNotifications'), admin.sendNotificationEmailStatic);

/**
 * @swagger
 * admin/invite:
 *   post:
 *     description: Use to invite a new admin
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.post('/invite', middleware.auth.hasPermission('admin:ManageAdmins'), admin.inviteAdmin);

/**
 * @swagger
 * admin/remove:
 *   post:
 *     description: Use to remove an admin
 *     responses:
 *       '200':
 *         description: A successful response
 */
router.post('/remove', middleware.auth.hasPermission('admin:ManageAdmins'), admin.removeAdmin);

/**
 * @swagger
 * admin/all:
 *  get:
 *   description: Use to get all admin invites
 *   responses:
 *    '200':
 *      description: A successful response
 */

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
