import { a as SvelteComponentDev, b as init, c as safe_not_equal, g as space, j as claim_text, o as insert, t as mount_component, m as detach, h as element, i as text, k as claim_element, l as children, n as add_location, p as append, r as noop } from './chunk.989912da.js';
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
import { a as GuideLayout } from './chunk.2ddcebe2.js';
import './chunk.7ee4e2c0.js';
import { a as Examples } from './chunk.2b9930ea.js';

/* src/routes/guide/examples/validating-form-manually/index.svelte generated by Svelte v3.4.2 */

const file = "src/routes/guide/examples/validating-form-manually/index.svelte";

// (5:0) <GuideLayout>
function create_default_slot(ctx) {
	var h1, t0, t1, section, p0, t2, a0, t3, t4, t5, p1, t6, a1, t7, t8, t9, t10, p2, t11, a2, t12, t13, t14, p3, t15, a3, t16, t17, t18, div, t19, t20, current;

	var samplecode0 = new SampleCode({
		props: { lang: "html", code: `
<form>
    <!-- It is a normal button -->
    <button id="loginButton" type="button">Login</a>
</form>

<script-tag>
document.addEventListener('DOMContentLoaded', function(e) {
    // Create a FormValidation instance
    const fv = FormValidation.formValidation(demoForm, {
        fields: { ... },
        plugins: { ... },
    });

    const loginButton = document.getElementById('loginButton');
    loginButton.addEventListener('click', function() {
        fv.validate().then(function(status) {
            // status can be one of the following value
            // 'NotValidated': The form is not yet validated
            // 'Valid': The form is valid
            // 'Invalid': The form is invalid
            ...
        });
    });
});
</script-tag>
` },
		$$inline: true
	});

	var samplecode1 = new SampleCode({
		props: { lang: "javascript", code: `
const loginButton = document.getElementById('loginButton');

// Create a FormValidation instance
const fv = FormValidation.formValidation(demoForm, {
    fields: { ... },
    plugins: { ... },
}).on('core.form.validating', function() {
    loginButton.innerHTML = 'Validating ...';
});

loginButton.addEventListener('click', function() {
    fv.validate().then(function(status) {
        // Update the login button content based on the validation status
        loginButton.innerHTML = (status === 'Valid') 
            ? 'Form is validated. Logging in ...'
            : 'Please try again';
    });
});
` },
		$$inline: true
	});

	var demo = new Demo({
		props: {
		prefix: "/guide/examples/validating-form-manually",
		frameworks: ['tachyons']
	},
		$$inline: true
	});

	var examples = new Examples({
		props: { examples: [
        'Multiple steps wizard',
        'Using Ajax to submit the form',
        'Validating form manually',
    ] },
		$$inline: true
	});

	return {
		c: function create() {
			h1 = element("h1");
			t0 = text("Validating form manually");
			t1 = space();
			section = element("section");
			p0 = element("p");
			t2 = text("In most cases, the form can be validated automatically when user click its Submit button via the ");
			a0 = element("a");
			t3 = text("SubmitButton");
			t4 = text(" plugin.");
			t5 = space();
			p1 = element("p");
			t6 = text("FormValidation also allows us to validate the form manually by using the ");
			a1 = element("a");
			t7 = text("validate()");
			t8 = text(" method. The following piece of code demonstrates how to validate a form when user click on a normal button:");
			t9 = space();
			samplecode0.$$.fragment.c();
			t10 = space();
			p2 = element("p");
			t11 = text("We are able to improve the user experience by letting user know that the form is going to be validated. It's useful if the validation takes time (let's say that you are using the ");
			a2 = element("a");
			t12 = text("remote");
			t13 = text(" validator).");
			t14 = space();
			p3 = element("p");
			t15 = text("For example, by triggering the ");
			a3 = element("a");
			t16 = text("core.form.validating");
			t17 = text(" event, we can show a progress bar or simply update the button content such as:");
			t18 = space();
			div = element("div");
			samplecode1.$$.fragment.c();
			t19 = space();
			demo.$$.fragment.c();
			t20 = space();
			examples.$$.fragment.c();
			this.h();
		},

		l: function claim(nodes) {
			h1 = claim_element(nodes, "H1", { class: true }, false);
			var h1_nodes = children(h1);

			t0 = claim_text(h1_nodes, "Validating form manually");
			h1_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n    \n    ");

			section = claim_element(nodes, "SECTION", { class: true }, false);
			var section_nodes = children(section);

			p0 = claim_element(section_nodes, "P", { class: true }, false);
			var p0_nodes = children(p0);

			t2 = claim_text(p0_nodes, "In most cases, the form can be validated automatically when user click its Submit button via the ");

			a0 = claim_element(p0_nodes, "A", { href: true, class: true }, false);
			var a0_nodes = children(a0);

			t3 = claim_text(a0_nodes, "SubmitButton");
			a0_nodes.forEach(detach);
			t4 = claim_text(p0_nodes, " plugin.");
			p0_nodes.forEach(detach);
			t5 = claim_text(section_nodes, "\n        ");

			p1 = claim_element(section_nodes, "P", { class: true }, false);
			var p1_nodes = children(p1);

			t6 = claim_text(p1_nodes, "FormValidation also allows us to validate the form manually by using the ");

			a1 = claim_element(p1_nodes, "A", { href: true, class: true }, false);
			var a1_nodes = children(a1);

			t7 = claim_text(a1_nodes, "validate()");
			a1_nodes.forEach(detach);
			t8 = claim_text(p1_nodes, " method. The following piece of code demonstrates how to validate a form when user click on a normal button:");
			p1_nodes.forEach(detach);
			t9 = claim_text(section_nodes, "\n");
			samplecode0.$$.fragment.l(section_nodes);
			t10 = claim_text(section_nodes, "  \n        ");

			p2 = claim_element(section_nodes, "P", { class: true }, false);
			var p2_nodes = children(p2);

			t11 = claim_text(p2_nodes, "We are able to improve the user experience by letting user know that the form is going to be validated. It's useful if the validation takes time (let's say that you are using the ");

			a2 = claim_element(p2_nodes, "A", { href: true, class: true }, false);
			var a2_nodes = children(a2);

			t12 = claim_text(a2_nodes, "remote");
			a2_nodes.forEach(detach);
			t13 = claim_text(p2_nodes, " validator).");
			p2_nodes.forEach(detach);
			t14 = claim_text(section_nodes, "\n        ");

			p3 = claim_element(section_nodes, "P", { class: true }, false);
			var p3_nodes = children(p3);

			t15 = claim_text(p3_nodes, "For example, by triggering the ");

			a3 = claim_element(p3_nodes, "A", { href: true, class: true }, false);
			var a3_nodes = children(a3);

			t16 = claim_text(a3_nodes, "core.form.validating");
			a3_nodes.forEach(detach);
			t17 = claim_text(p3_nodes, " event, we can show a progress bar or simply update the button content such as:");
			p3_nodes.forEach(detach);
			t18 = claim_text(section_nodes, "\n        ");

			div = claim_element(section_nodes, "DIV", { class: true }, false);
			var div_nodes = children(div);

			samplecode1.$$.fragment.l(div_nodes);
			div_nodes.forEach(detach);
			t19 = claim_text(section_nodes, "\n        ");
			demo.$$.fragment.l(section_nodes);
			section_nodes.forEach(detach);
			t20 = claim_text(nodes, "\n\n    ");
			examples.$$.fragment.l(nodes);
			this.h();
		},

		h: function hydrate() {
			h1.className = "tc lh-copy";
			add_location(h1, file, 5, 4, 106);
			a0.href = "/guide/plugins/submit-button";
			a0.className = "blue dim link";
			add_location(a0, file, 8, 124, 314);
			p0.className = "lh-copy";
			add_location(p0, file, 8, 8, 198);
			a1.href = "/guide/api/validate";
			a1.className = "blue dim link";
			add_location(a1, file, 9, 100, 504);
			p1.className = "lh-copy";
			add_location(p1, file, 9, 8, 412);
			a2.href = "/guide/validators/remote";
			a2.className = "blue dim link";
			add_location(a2, file, 37, 206, 1687);
			p2.className = "lh-copy";
			add_location(p2, file, 37, 8, 1489);
			a3.href = "/guide/events/core.form.validating";
			a3.className = "blue dim link";
			add_location(a3, file, 38, 58, 1829);
			p3.className = "lh-copy";
			add_location(p3, file, 38, 8, 1779);
			div.className = "mb4";
			add_location(div, file, 39, 8, 2012);
			section.className = "mv5";
			add_location(section, file, 7, 4, 168);
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
			append(section, t5);
			append(section, p1);
			append(p1, t6);
			append(p1, a1);
			append(a1, t7);
			append(p1, t8);
			append(section, t9);
			mount_component(samplecode0, section, null);
			append(section, t10);
			append(section, p2);
			append(p2, t11);
			append(p2, a2);
			append(a2, t12);
			append(p2, t13);
			append(section, t14);
			append(section, p3);
			append(p3, t15);
			append(p3, a3);
			append(a3, t16);
			append(p3, t17);
			append(section, t18);
			append(section, div);
			mount_component(samplecode1, div, null);
			append(section, t19);
			mount_component(demo, section, null);
			insert(target, t20, anchor);
			mount_component(examples, target, anchor);
			current = true;
		},

		p: noop,

		i: function intro(local) {
			if (current) return;
			samplecode0.$$.fragment.i(local);

			samplecode1.$$.fragment.i(local);

			demo.$$.fragment.i(local);

			examples.$$.fragment.i(local);

			current = true;
		},

		o: function outro(local) {
			samplecode0.$$.fragment.o(local);
			samplecode1.$$.fragment.o(local);
			demo.$$.fragment.o(local);
			examples.$$.fragment.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(h1);
				detach(t1);
				detach(section);
			}

			samplecode0.$destroy();

			samplecode1.$destroy();

			demo.$destroy();

			if (detaching) {
				detach(t20);
			}

			examples.$destroy(detaching);
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
			document.title = "FormValidation • Validating form manually";
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
