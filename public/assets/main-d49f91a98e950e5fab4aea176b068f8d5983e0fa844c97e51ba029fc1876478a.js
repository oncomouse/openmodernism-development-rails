
'use strict';

var requirejs_configuration = {
	'baseUrl': 'assets',

	'paths': {
		'app': 'app',
		'collections/anthology_collection': 'collections/anthology_collection',
		'collections/document_collection': 'collections/document_collection',
		'collections/metadata_collection': 'collections/metadata_collection',
		'components/anthology/anthologies': 'components/anthology/anthologies',
		'components/document/document': 'components/document/document',
		'components/document/documents': 'components/document/documents',
		'components/document/short_view': 'components/document/short_view',
		'components/login/login_link': 'components/login/login_link',
		'components/login/login_modal': 'components/login/login_modal',
		'components/sidebar/routes/anthologies': 'components/sidebar/routes/anthologies',
		'components/sidebar/routes/documents': 'components/sidebar/routes/documents',
		'components/sidebar/sidebar': 'components/sidebar/sidebar',
		'mixins/login-dependent/LoginDependentMixin': 'mixins/login-dependent/LoginDependentMixin',
		'mixins/publish-component-mount/PublishComponentMountMixin': 'mixins/publish-component-mount/PublishComponentMountMixin',
		'mixins/route-architecture/RouteArchitectureMixin': 'mixins/route-architecture/RouteArchitectureMixin',
		'models/anthology': 'models/anthology',
		'models/document': 'models/document',
		'models/document_file': 'models/document_file',
		'models/metadata/author': 'models/metadata/author',
		'models/metadata/citation': 'models/metadata/citation',
		'models/metadata/object': 'models/metadata/object',
		'models/metadata/title': 'models/metadata/title',
		'models/metadata': 'models/metadata',
		'router': 'router',
		'routes/anthologies': 'routes/anthologies',
		'routes/anthology': 'routes/anthology',
		'routes/document': 'routes/document',
		'routes/documents': 'routes/documents',
		'routes/generic': 'routes/generic',
		'utilities/alert_manager': 'utilities/alert_manager',
		'utilities/form_validation': 'utilities/form_validation',
		'utilities/google/amd-main': 'utilities/google/amd-main',
		'utilities/google/phonenumberutil.min': 'utilities/google/phonenumberutil.min',
		'utilities/login_manager': 'utilities/login_manager',
		'vendor/citeproc-amd/citeproc': 'vendor/citeproc-amd/citeproc',
		'vendor/citeproc-amd/csl': 'vendor/citeproc-amd/csl',
		'vendor/citeproc-amd/locale': 'vendor/citeproc-amd/locale',
		'vendor/citeproc-amd/sys': 'vendor/citeproc-amd/sys',
		'vendor/citeproc-amd/xmldom': 'vendor/citeproc-amd/xmldom',
		'vendor/has/has': 'vendor/has/has',
		'vendor/sprintf-amd/sprintf-shim': 'vendor/sprintf-amd/sprintf-shim',
		'vendor/writedown/writedown': 'vendor/writedown/writedown',
		'views/document_file/document_file_view': 'views/document_file/document_file_view',
		'backbone': 'backbone',
		'jquery': 'dist/jquery',
		'jsyaml': 'dist/js-yaml',
		'lodash': 'lodash',
		'lorem': 'lorem',
		'sprintf-vendor': 'src/sprintf',
		'react': 'react-with-addons',
		'postal': 'lib/postal',
		'postal.diagnostics': 'lib/postal.diagnostics',
		'postal.request-response': 'lib/postal.request-response',
		'text': 'lib/text',
		'json': 'src/json',
		'citeproc': 'vendor/citeproc-amd',
		'sprintf': 'vendor/sprintf-amd/sprintf-shim',
		'writedown': 'vendor/writedown/writedown',
		'bootstrap': 'assets/javascripts/bootstrap',
		'jquery-ui': 'ui',
		'has': 'vendor/has/has'
	},
	'shim': {
		'lodash': {
			'exports': '_'
		},
		'jquery-ui': {
			'deps': ['jquery'],
			'exports': '$'
		},
		'jst': {
			'exports': 'JST'
		},
		'lorem': {
			'exports': 'Lorem'
		},
		'sprintf': {
			'exports': 'sprintf'
		},

		'bootstrap/affix':      { 'deps': ['jquery'], 'exports': '$.fn.affix' }, 
		'bootstrap/alert':      { 'deps': ['jquery'], 'exports': '$.fn.alert' },
		'bootstrap/button':     { 'deps': ['jquery'], 'exports': '$.fn.button' },
		'bootstrap/carousel':   { 'deps': ['jquery'], 'exports': '$.fn.carousel' },
		'bootstrap/collapse':   { 'deps': ['jquery'], 'exports': '$.fn.collapse' },
		'bootstrap/dropdown':   { 'deps': ['jquery'], 'exports': '$.fn.dropdown' },
		'bootstrap/modal':      { 'deps': ['jquery'], 'exports': '$.fn.modal' },
		'bootstrap/popover':    { 'deps': ['jquery'], 'exports': '$.fn.popover' },
		'bootstrap/scrollspy':  { 'deps': ['jquery'], 'exports': '$.fn.scrollspy' },
		'bootstrap/tab':        { 'deps': ['jquery'], 'exports': '$.fn.tab'        },
		'bootstrap/tooltip':    { 'deps': ['jquery'], 'exports': '$.fn.tooltip' },
		'bootstrap/transition': { 'deps': ['jquery'], 'exports': '$.fn.transition' }
	},
	'map': {
		'*': {
			'underscore': 'lodash'
		}
	}
};

requirejs.config(requirejs_configuration);

var manifest = window.development ? '' : 'json!/assets/manifest.json';

require(['app', manifest], function(App, manifest) { 
	window.manifest = window.development ? undefined : manifest;
	App.start(); 
});
