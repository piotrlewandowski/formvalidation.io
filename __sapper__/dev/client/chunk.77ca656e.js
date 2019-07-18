import { a as SvelteComponentDev, b as init, c as safe_not_equal, h as element, k as claim_element, l as children, m as detach, n as add_location, o as insert, p as append, x as group_outros, y as on_outro, z as check_outros, d as create_slot, i as text, g as space, j as claim_text, q as set_data, e as get_slot_changes, f as get_slot_context, F as set_style } from './chunk.989912da.js';

/* src/components/Card.svelte generated by Svelte v3.4.2 */

const file = "src/components/Card.svelte";

// (21:8) {:else}
function create_else_block(ctx) {
	var a, div0, t0, t1, div1, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			a = element("a");
			div0 = element("div");
			t0 = text(ctx.title);
			t1 = space();
			div1 = element("div");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			a = claim_element(nodes, "A", { href: true, class: true }, false);
			var a_nodes = children(a);

			div0 = claim_element(a_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, ctx.title);
			div0_nodes.forEach(detach);
			t1 = claim_text(a_nodes, "\n            ");

			div1 = claim_element(a_nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			a_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "f4 fw6 mb3";
			add_location(div0, file, 22, 12, 561);

			div1.className = "lh-copy";
			add_location(div1, file, 23, 12, 611);
			a.href = ctx.target;
			a.className = "link pointer white db h-100";
			add_location(a, file, 21, 8, 493);
		},

		m: function mount(target_1, anchor) {
			insert(target_1, a, anchor);
			append(a, div0);
			append(div0, t0);
			append(a, t1);
			append(a, div1);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed.title) {
				set_data(t0, ctx.title);
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (!current || changed.target) {
				a.href = ctx.target;
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(a);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

// (18:8) {#if target === ''}
function create_if_block(ctx) {
	var div0, t0, t1, div1, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			div0 = element("div");
			t0 = text(ctx.title);
			t1 = space();
			div1 = element("div");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			div0 = claim_element(nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			t0 = claim_text(div0_nodes, ctx.title);
			div0_nodes.forEach(detach);
			t1 = claim_text(nodes, "\n        ");

			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			if (default_slot) default_slot.l(div1_nodes);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "f4 fw6 mb3";
			add_location(div0, file, 18, 8, 382);

			div1.className = "lh-copy";
			add_location(div1, file, 19, 8, 428);
		},

		m: function mount(target_1, anchor) {
			insert(target_1, div0, anchor);
			append(div0, t0);
			insert(target_1, t1, anchor);
			insert(target_1, div1, anchor);

			if (default_slot) {
				default_slot.m(div1, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (!current || changed.title) {
				set_data(t0, ctx.title);
			}

			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div0);
				detach(t1);
				detach(div1);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function create_fragment(ctx) {
	var div1, div0, current_block_type_index, if_block, current;

	var if_block_creators = [
		create_if_block,
		create_else_block
	];

	var if_blocks = [];

	function select_block_type(ctx) {
		if (ctx.target === '') return 0;
		return 1;
	}

	current_block_type_index = select_block_type(ctx);
	if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);

	return {
		c: function create() {
			div1 = element("div");
			div0 = element("div");
			if_block.c();
			this.h();
		},

		l: function claim(nodes) {
			div1 = claim_element(nodes, "DIV", { class: true }, false);
			var div1_nodes = children(div1);

			div0 = claim_element(div1_nodes, "DIV", { class: true }, false);
			var div0_nodes = children(div0);

			if_block.l(div0_nodes);
			div0_nodes.forEach(detach);
			div1_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			div0.className = "pa3 shadow-4 h-100 white";
			add_location(div0, file, 16, 4, 307);
			div1.className = "card br2";
			add_location(div1, file, 15, 0, 280);
		},

		m: function mount(target_1, anchor) {
			insert(target_1, div1, anchor);
			append(div1, div0);
			if_blocks[current_block_type_index].m(div0, null);
			current = true;
		},

		p: function update(changed, ctx) {
			var previous_block_index = current_block_type_index;
			current_block_type_index = select_block_type(ctx);
			if (current_block_type_index === previous_block_index) {
				if_blocks[current_block_type_index].p(changed, ctx);
			} else {
				group_outros();
				on_outro(() => {
					if_blocks[previous_block_index].d(1);
					if_blocks[previous_block_index] = null;
				});
				if_block.o(1);
				check_outros();

				if_block = if_blocks[current_block_type_index];
				if (!if_block) {
					if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
					if_block.c();
				}
				if_block.i(1);
				if_block.m(div0, null);
			}
		},

		i: function intro(local) {
			if (current) return;
			if (if_block) if_block.i();
			current = true;
		},

		o: function outro(local) {
			if (if_block) if_block.o();
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div1);
			}

			if_blocks[current_block_type_index].d();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	// Props
let { target = '', title = '' } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('target' in $$props) $$invalidate('target', target = $$props.target);
		if ('title' in $$props) $$invalidate('title', title = $$props.title);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { target, title, $$slots, $$scope };
}

class Card extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance, create_fragment, safe_not_equal, ["target", "title"]);
	}

	get target() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set target(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	get title() {
		throw new Error("<Card>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set title(value) {
		throw new Error("<Card>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

/* src/components/Cards.svelte generated by Svelte v3.4.2 */

const file$1 = "src/components/Cards.svelte";

function create_fragment$1(ctx) {
	var div, current;

	const default_slot_1 = ctx.$$slots.default;
	const default_slot = create_slot(default_slot_1, ctx, null);

	return {
		c: function create() {
			div = element("div");

			if (default_slot) default_slot.c();
			this.h();
		},

		l: function claim(nodes) {
			div = claim_element(nodes, "DIV", { style: true }, false);
			var div_nodes = children(div);

			if (default_slot) default_slot.l(div_nodes);
			div_nodes.forEach(detach);
			this.h();
		},

		h: function hydrate() {
			set_style(div, "display", "grid");
			set_style(div, "grid-column-gap", "2em");
			set_style(div, "grid-row-gap", "2em");
			set_style(div, "grid-template-columns", "repeat(" + ctx.cols + ", 1fr)");
			add_location(div, file$1, 0, 0, 0);
		},

		m: function mount(target, anchor) {
			insert(target, div, anchor);

			if (default_slot) {
				default_slot.m(div, null);
			}

			current = true;
		},

		p: function update(changed, ctx) {
			if (default_slot && default_slot.p && changed.$$scope) {
				default_slot.p(get_slot_changes(default_slot_1, ctx, changed, null), get_slot_context(default_slot_1, ctx, null));
			}

			if (!current || changed.cols) {
				set_style(div, "grid-template-columns", "repeat(" + ctx.cols + ", 1fr)");
			}
		},

		i: function intro(local) {
			if (current) return;
			if (default_slot && default_slot.i) default_slot.i(local);
			current = true;
		},

		o: function outro(local) {
			if (default_slot && default_slot.o) default_slot.o(local);
			current = false;
		},

		d: function destroy(detaching) {
			if (detaching) {
				detach(div);
			}

			if (default_slot) default_slot.d(detaching);
		}
	};
}

function instance$1($$self, $$props, $$invalidate) {
	// Props
let { cols = 3 } = $$props;

	let { $$slots = {}, $$scope } = $$props;

	$$self.$set = $$props => {
		if ('cols' in $$props) $$invalidate('cols', cols = $$props.cols);
		if ('$$scope' in $$props) $$invalidate('$$scope', $$scope = $$props.$$scope);
	};

	return { cols, $$slots, $$scope };
}

class Cards extends SvelteComponentDev {
	constructor(options) {
		super(options);
		init(this, options, instance$1, create_fragment$1, safe_not_equal, ["cols"]);
	}

	get cols() {
		throw new Error("<Cards>: Props cannot be read directly from the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}

	set cols(value) {
		throw new Error("<Cards>: Props cannot be set directly on the component instance unless compiling with 'accessors: true' or '<svelte:options accessors/>'");
	}
}

export { Cards as a, Card as b };
