import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append } from './chunk.989912da.js';
import './chunk.9eca0151.js';
import './chunk.77ca656e.js';
import './chunk.8206184d.js';
import { a as SampleCode } from './chunk.47169253.js';
import './chunk.04c942d0.js';
import './chunk.42493314.js';
import { a as Demo } from './chunk.095827ef.js';
import './chunk.75c83501.js';
import './chunk.aa7fcff5.js';
import './chunk.058c0688.js';
import './chunk.4e6dbbb2.js';
import { a as Tip } from './chunk.38eb3b47.js';
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';
import { a as RelatedValidators } from './chunk.609a43e8.js';

/* src/routes/guide/examples/getting-notified-while-field-is-being-validated/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/getting-notified-while-field-is-being-validated/index.svelte";

// (28:8) <Tip>
function create_default_slot_1(ctx) {
	var t0, a0, t1, t2, a1, t3, t4, a2, t5, t6, a3, t7, t8;

	return {
		c: function create() {
			t0 = text("The demo assume that you're using the ");
			a0 = element("a");
			t1 = text("Bootstrap");
			t2 = text(" framework.\n            Of course, you can use other progress bar component provided by the ");
			a1 = element("a");
			t3 = text("Foundation");
			t4 = text(",\n            ");
			a2 = element("a");
			t5 = text("Semantic UI");
			t6 = text(" or ");
			a3 = element("a");
			t7 = text("UIKit");
			t8 = text(" frameworks.");
			this.h();
		},

		l: function claim(nodes) {
			t0 = claim_text(nodes, "The demo assume that you're using the ");

			a0 = claim_element(nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t1 = claim_text(a0_nodes, "Bootstrap");
			a0_nodes.forEach(detach);
			t2 = claim_text(nodes, " framework.\n            Of course, you can use other progress bar component provided by the ");

			a1 = claim_element(nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t3 = claim_text(a1_nodes, "Foundation");
			a1_nodes.forEach(detach);
			t4 = claim_text(nodes, ",\n            ");

			a2 = claim_element(nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t5 = claim_text(a2_nodes, "Semantic UI");
			a2_nodes.forEach(detach);
			t6 = claim_text(nodes, " or ");

			a3 = claim_element(nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t7 = claim_text(a3_nodes, "UIKit");
			a3_nodes.forEach(detach);
			t8 = claim_text(nodes, " frameworks.");
			this.h();
		},

		h: function hydrate() {
			a0.href = "http://getbootstrap.com";
			a0.className = "blue dim link";
			add_location(a0, file, 28, 50, 1735);
			a1.href = "https://foundation.zurb.com/sites/docs/progress-bar.html";
			a1.className = "blue dim link";
			add_location(a1, file, 29, 80, 1896);
			a2.href = "http://semantic-ui.com/modules/progress.html";
			a2.className = "blue dim link";
			add_location(a2, file, 30, 12, 2013);
			a3.href = "https://getuikit.com/docs/progress";
			a3.className = "blue dim link";
			add_location(a3, file, 30, 108, 2109);
		},

		m: function mount(target, anchor) {
			insert(target, t0, anchor);
			insert(target, a0, anchor);
			append(a0, t1);
			insert(target, t2, anchor);
			insert(target, a1, anchor);
			append(a1, t3);
			insert(target, t4, anchor);
			insert(target, a2, anchor);
			append(a2, t5);
			insert(target, t6, anchor);
			insert(target, a3, anchor);
			append(a3, t7);
			insert(target, t8, anchor);
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t0);
				detach(a0);
				detach(t2);
				detach(a1);
				detach(t4);
				detach(a2);
				detach(t6);
				detach(a3);
				detach(t8);
			}
		}
	};
}

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, a0, t3, t4, a1, t5, t6, a2, t7, t8, a3, t9, t10, t11, p1, t12, t13, p2, t14, t15, t16, t17, p3, t18, t19, t20, p4, t21, t22, t23, t24, current;

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<div class="form-group row">
    <label class="col-sm-3 col-form-label">Username</label>
    <div class="col-sm-6">
        <input type="text" class="form-control" name="username" autocomplete="off" />
        
        <!-- The progress bar is hidden initially -->
        <div class="progress mt-2" id="progressBar" style="opacity: 0;">
            <div class="progress-bar progress-bar-striped progress-bar-animate" style="width: 100%"></div>
        </div>
    </div>
</div>
` },
		$$inline: true
	});

	var tip = new Tip({
		props: {
		$$slots: { default: [create_default_slot_1] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
FormValidation
    .formValidation(
        document.getElementById('demoForm'),
        {
            fields: {
                username: {
                    validators: {
                        notEmpty: {
                            message: 'The username is required'
                        },
                        remote: {
                            message: 'The username is already taken',
                            method: 'GET',
                            url: '...',
                        },
                    }
                },
                ...
            },
            plugins: {
                ...
            },
        }
    )
    .on('core.validator.validating', function(e) {
        if (e.field === 'username' && e.validator === 'remote') {
            document.getElementById('progressBar').style.opacity = '1';
        }
    })
    .on('core.validator.validated', function(e) {
        if (e.field === 'username' && e.validator === 'remote') {
            document.getElementById('progressBar').style.opacity = '0';
        }
    });
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/getting-notified-while-field-is-being-validated",
		frameworks: ['bootstrap']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Enabling submit button only when all fields are valid',
        'Getting notified while field is being validated',
        'Pending validation for a given number of seconds',
        'Performing validation if field value exceed given number of characters',
    ] },
		$$inline: true
	});

	var relatedvalidators = new RelatedValidators({
		props: { validators: ['remote'] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Getting notified while field is being validated");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("When using either ");
			a0 = element("a");
			t3 = text("callback");
			t4 = text(", ");
			a1 = element("a");
			t5 = text("promise");
			t6 = text(" or ");
			a2 = element("a");
			t7 = text("remote");
			t8 = text("\n            validator, your validation logic might take time. For instance, the ");
			a3 = element("a");
			t9 = text("remote");
			t10 = text(" validator connects to the server side\n            and executes a few of database queries to check whether or not the field is valid. These kind of process could force the user to wait for a busy processing.\n            User even don't have idea about what is happening.");
			t11 = space();
			p1 = element("p");
			t12 = text("This example displays a progress bar when the validation is being processed. It enhances the user experience of the application.");
			t13 = space();
			p2 = element("p");
			t14 = text("First, prepare the progress bar in the markup:");
			t15 = space();
			samplecode0.$$.fragment.c();
			t16 = space();
			tip.$$.fragment.c();
			t17 = space();
			p3 = element("p");
			t18 = text("Next, display the progress bar when the field is being validated. Also, gide it when the validation is done.");
			t19 = space();
			samplecode1.$$.fragment.c();
			t20 = space();
			p4 = element("p");
			t21 = text("For testing purpose, the demo always answers that the username is already taken no matter what you input.");
			t22 = space();
			demo.$$.fragment.c();
			t23 = space();
			examples.$$.fragment.c();
			t24 = space();
			relatedvalidators.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Getting notified while field is being validated");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "When using either ");

			a0 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "callback");
			a0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, ", ");

			a1 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t5 = claim_text(a1_nodes, "promise");
			a1_nodes.forEach(detach);
			t6 = claim_text(p0_nodes, " or ");

			a2 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t7 = claim_text(a2_nodes, "remote");
			a2_nodes.forEach(detach);
			t8 = claim_text(p0_nodes, "\n            validator, your validation logic might take time. For instance, the ");

			a3 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t9 = claim_text(a3_nodes, "remote");
			a3_nodes.forEach(detach);
			t10 = claim_text(p0_nodes, " validator connects to the server side\n            and executes a few of database queries to check whether or not the field is valid. These kind of process could force the user to wait for a busy processing.\n            User even don't have idea about what is happening.");
			p0_nodes.forEach(detach);
			t11 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t12 = claim_text(p1_nodes, "This example displays a progress bar when the validation is being processed. It enhances the user experience of the application.");
			p1_nodes.forEach(detach);
			t13 = claim_text(section_nodes, "\n        ");

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t14 = claim_text(p2_nodes, "First, prepare the progress bar in the markup:");
			p2_nodes.forEach(detach);
			t15 = claim_text(section_nodes, "\n");
			samplecode0.$$.fragment.l(section_nodes);
			t16 = claim_text(section_nodes, "\n        ");
			tip.$$.fragment.l(section_nodes);
			t17 = claim_text(section_nodes, "\n        ");

			p3 = claim_element(section_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t18 = claim_text(p3_nodes, "Next, display the progress bar when the field is being validated. Also, gide it when the validation is done.");
			p3_nodes.forEach(detach);
			t19 = claim_text(section_nodes, "\n");
			samplecode1.$$.fragment.l(section_nodes);
			t20 = claim_text(section_nodes, "\n        ");

			p4 = claim_element(section_nodes, "P", { class: true }, false);
			var p4_nodes = children(p4);

			t21 = claim_text(p4_nodes, "For testing purpose, the demo always answers that the username is already taken no matter what you input.");
			p4_nodes.forEach(detach);
			t22 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t23 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			t24 = claim_text(nodes, "\n\n    ");
			relatedvalidators.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 129);
			a0.href = "/guide/validators/callback";
			a0.className = "blue dim link";
			add_location(a0, file, 8, 45, 281);
			a1.href = "/guide/validators/promise";
			a1.className = "blue dim link";
			add_location(a1, file, 8, 118, 354);
			a2.href = "/guide/validators/remote";
			a2.className = "blue dim link";
			add_location(a2, file, 8, 191, 427);
			a3.href = "/guide/validators/remote";
			a3.className = "blue dim link";
			add_location(a3, file, 9, 80, 575);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 244);
			p1.className = "lh-copy";
			add_location(p1, file, 12, 8, 925);
			p2.className = "lh-copy";
			add_location(p2, file, 13, 8, 1085);
			p3.className = "lh-copy";
			add_location(p3, file, 32, 8, 2221);
			p4.className = "lh-copy";
			add_location(p4, file, 69, 8, 3483);
			section.className = "mv5";
			add_location(section, file, 7, 4, 214);
		},

		m: function mount(target, anchor) {
			insert(target, h1, anchor);
			append(h1, t0);
			insert(target, t1, anchor);
			insert(target, section, anchor);
			append(section, p0);
			append(p0, t2);
			append(p0, a0);
			append(a0, t3);
			append(p0, t4);
			append(p0, a1);
			append(a1, t5);
			append(p0, t6);
			append(p0, a2);
			append(a2, t7);
			append(p0, t8);
			append(p0, a3);
			append(a3, t9);
			append(p0, t10);
			append(section, t11);
			append(section, p1);
			append(p1, t12);
			append(section, t13);
			append(section, p2);
			append(p2, t14);
			append(section, t15);
			mount_component(samplecode0, section, null);
			append(section, t16);
			mount_component(tip, section, null);
			append(section, t17);
			append(section, p3);
			append(p3, t18);
			append(section, t19);
			mount_component(samplecode1, section, null);
			append(section, t20);
			append(section, p4);
			append(p4, t21);
			append(section, t22);
			mount_component(demo, section, null);
			insert(target, t23, anchor);
			mount_component(examples, target, anchor);
			insert(target, t24, anchor);
			mount_component(relatedvalidators, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var tip_changes = {};
			if (changed.$$scope) tip_changes.$$scope = { changed, ctx };
			tip.$set(tip_changes);
		},

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			tip.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			relatedvalidators.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			tip.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			relatedvalidators.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			samplecode0.$destroy();

			tip.$destroy();

			samplecode1.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t23);
			}

			examples.$destroy(detaching);

			if (detaching) {
				detach(t24);
			}

			relatedvalidators.$destroy(detaching);
		}
	};
}

function create_fragment(ctx) {
	var t, current;

	var guidelayout = new GuideLayout({
		props: {
		$$slots: { default: [create_default_slot] },
		$$scope: { ctx }
	},
		$$inline: true
	});

	return {
		c: function create() {
			t = space();
			guidelayout.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			t = claim_text(nodes, "\n\n");
			guidelayout.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			document.title = "FormValidation • Getting notified while field is being validated";
		},

		m: function mount(target, anchor) {
			insert(target, t, anchor);
			mount_component(guidelayout, target, anchor);
			current = true;
		},

		p: function update(changed, ctx) {
			var guidelayout_changes = {};
			if (changed.$$scope) guidelayout_changes.$$scope = { changed, ctx };
			guidelayout.$set(guidelayout_changes);
		},

		i: function intro(local) {
			if (current) return;
			guidelayout.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			guidelayout.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(t);
			}

			guidelayout.$destroy(detaching);
		}
	};
}

class Index extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, null, create_fragment, safe_not_equal, []);
	}
}

export default Index;
