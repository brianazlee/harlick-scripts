import {Fragment, h, render} from 'preact';

import {PRICE_REGEX} from './priceCalc';

type Item = {
  name: string;
  desc?: h.JSX.Element;
  image?: string;
  hideNoCharge?: boolean;
};

type Description = {
  section: string;
  description?: h.JSX.Element;
  items?: Item[];
};

const descriptions: Description[] = [
  {
    section: 'Upper boot material options',
    items: [
      {
        name: 'Standard elk leather',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff21335493aa48532f9/1616097266916/Standard+Elk+Leather.png?format=500w',
        desc: (
          <div>
            <p>
              Elk leather is our traditional and most commonly selected boot leather. It
              offers good stiffness and durability.
            </p>
            <p>Offered in white, black or tan.</p>
          </div>
        ),
      },
      {
        name: 'Pebbled calf',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e4787304435eebbea3/1616054756415/Rectangle+3-2.png?format=750w',
        desc: (
          <div>
            <p>
              Pebble calf is a durable yet more supple leather with a unique textured
              finish.
            </p>
            <p>We offer it in white, black or light tan.</p>
          </div>
        ),
      },
      {
        name: 'Suede leather',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e332f1a3768576bfc9/1616054755829/Rectangle+2-2.png?format=750w',
        desc: (
          <div>
            <p>
              Suede leather is available in a variety of colors. It is very durable and
              holds up well against scrapes and scuffs. Be sure to go up one stiffness
              level if needed to provide adequate support.
            </p>
            <p>
              Consult with one of our Harlick’s technicians if more assistance is needed.
            </p>
          </div>
        ),
      },
      {
        name: 'Additional colored calf',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff1cde59d65474fa784/1616097265839/Rectangle+9.png?format=500w',
        desc: (
          <div>
            <p>
              Colored calf leather is a softer more supple leather that can at times
              require going up one level of support.
            </p>
            <p>
              Offered in a variety of colors aside from our traditional white, black and
              tan. This option also includes metallic finishes.
            </p>
          </div>
        ),
      },
      {
        name: 'Specialty Leather',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e55d8f16380e27214c/1616054757123/Rectangle+8.png?format=750w',
        desc: (
          <p>
            Specialty leathers have the same structural qualities as the calf leathers but
            is available as animal print or with embossed treatments.
          </p>
        ),
      },
    ],
  },

  {
    section: 'Ankle padding options',
    items: [
      {
        name: 'Heel hugger padding',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053ebff91d9ec7f0b2cf5f8/1616112639869/Rectangle+6.png?format=1000w',
        desc: (
          <p>
            Heel hugger padding is additional padding added through the Achilles’ tendon
            area to help lock the heel in place.
          </p>
        ),
      },
      {
        name: 'Orthopedic ankle pocketing',
        desc: (
          <p>
            Orthopaedic ankle pocketing can be added to create a deeper pocket (up to a ¼
            inch pocket) for the ankle bones.
          </p>
        ),
      },
    ],
  },

  {
    section: 'Preferred ankle stiffness level',
    description: (
      <p>
        Harlick’s specialists will assist in determining the exact stiffness level based
        on your needs. Many factors such as your height, weight, skating level, ankle
        support needs and skating style are assessed.
      </p>
    ),
  },

  {
    section: 'Preferred ankle construction type',
    description: <p>All boots are available in two layer or three layer construction.</p>,
    items: [
      {
        name: 'Two layer construction',
        desc: (
          <p>
            Two layer construction boots will be slightly easier to break in and in the
            softest models offer less support and in the stiffer models you can still get
            good support while keeping the weight down.
          </p>
        ),
      },
      {
        name: 'Three layer construction',
        desc: (
          <p>
            Three layer construction boots are going to have more body and offer more
            stiffness in the ankle support. The three layer boot will require more break
            in but will ultimately offer greater support than the two layer boots.
          </p>
        ),
      },
      {
        name: 'Unsure',
        hideNoCharge: true,
      },
    ],
  },

  {
    section: 'Tongue lining',
    items: [
      {
        name: 'Polyurethane foam padded tongues',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053ecc59bdac0289f8de354/1616112837904/Rectangle+7+%282%29.png?format=1000w',
        desc: <div />,
      },
      {
        name: 'Lambs wool tongues',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e5b22f244600413ee3/1616054757708/Rectangle+5.png?format=750w',
        desc: <div />,
      },
      {
        name: '50/50 (polyurethane and lambs wool)',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff26655ff39b2423426/1616097266918/Rectangle+6.png?format=500w',
        desc: <div />,
      },
      {
        name: 'Leather or clarino covered polyeurethan foam tongues',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e30d9ceb298c7958a5/1616054755943/Rectangle+2-5.png?format=750w',
        desc: <div />,
      },
    ],
  },

  {
    section: 'Tongue options',
    items: [
      {name: 'Extra wide tongues', desc: <div />},
      {
        name: '1 or 2 hooks on tongues',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053eb674e4af10aaf0ab743/1616112487679/Rectangle+5.png?format=1000w',
        desc: <div />,
      },
      {name: 'Lace loop holes on tongues', desc: <div />},
    ],
  },

  {
    section: 'Scallop options',
    description: (
      <p>
        A wedge scallop is a small v-cut below the hooks that helps with additional knee
        and ankle bending. This option is good for all types of skating. The more wedge
        scallops you add to your boot, the greater the flexibility.
      </p>
    ),
  },

  {
    section: 'Insole options',
    items: [
      {name: 'Standard', desc: <div />},
      {
        name: 'Growth insoles',
        desc: (
          <p>
            Designed for younger skaters, growth insoles extend the life of a Harlick boot
            as the skater grows. Simply go up one size and add the growth insole. We also
            offer boot stretching services up to ½ size.
          </p>
        ),
      },
      {
        name: 'Poron insoles',
        desc: (
          <p>
            Poron innersoles are a great shock absorbing solution that offers premium
            comfort and support. The cushion density allows skaters to still feel their
            edges.
          </p>
        ),
      },
      {
        name: 'Lambs wool insoles',
        desc: (
          <p>
            Lambswool insoles are perfect for coaches that want to keep their feet warm on
            ice. This option is not recommended for jumping or high level skating.
          </p>
        ),
      },
      {name: 'Unsure', hideNoCharge: true, desc: <div />},
    ],
  },

  {
    section: 'Boot lining material',
    items: [
      {name: 'Smooth leather lining', desc: <div />},
      {
        name: 'Clarino lining',
        desc: (
          <p>
            Clarino lining is made of microfiber and is our most durable and most popular
            lining option. It maintains a high level of comfort while skating.
          </p>
        ),
      },
      {
        name: 'Lambs wool lining (includes lambs wool sock liner)',
        desc: (
          <p>
            Lambswool lining is perfect for coaches that want to keep their feet warm on
            ice. This option is not recommended for jumping or high level skating.
          </p>
        ),
      },
    ],
  },

  {
    section: 'Boot lining options',
    items: [
      {
        name: 'Thinsulate material between lining',
        desc: (
          <p>
            Thinsulate is a backing material that is added to the lining of the boot. It
            offers a thin layer of insulation to help keep the feet warm.
          </p>
        ),
      },
    ],
  },

  {
    section: 'Special height heels',
    description: (
      <p>
        Special heel heights range from a low heel (1 ½ inches) up to a high heel (2 ½
        inches). Oftentimes, dance skaters prefer a higher heel to provide better posture
        and more of a pointed toe look.
      </p>
    ),
  },

  {
    section: 'Special soles',
    items: [
      {name: 'Standard', desc: <div />},
      {
        name: 'Lightweight carbon graphite soles',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff2eaa9a8018c1ee554/1616097266920/Rectangle+8.png?format=500w',
        desc: (
          <p>
            Lightweight carbon fiber soles can reduce the boot weight by 20% without
            sacrificing durability and strength. Harlick only uses genuine carbon fiber.
          </p>
        ),
      },
      {name: 'Lightweight leather soles', desc: <div />},
    ],
  },

  {
    section: 'Additional custom boot options',
    items: [
      {
        name: 'Internal double sole insoles for added height',
        desc: (
          <p>
            Internal double insoles can give a skater additional height or be an
            orthopaedic measure used on only one foot.
          </p>
        ),
      },
    ],
  },

  {
    section: 'Sole finish color',
    items: [
      {
        name: 'Natural',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098ffbb7162bd07c0250/1616054671424/Rectangle+7.png?format=500w',
        desc: <div />,
      },
      {
        name: 'Black',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098ed1b52f422f2bd490/1616054670360/Rectangle+5.png?format=500w',
        desc: <div />,
      },
    ],
  },

  {
    section: 'Sole finish options',
    items: [
      {name: 'No sole finish', desc: <div />},
      {
        name: 'Clear wax finish',
        desc: <div />,
      },
      {
        name: 'Black sole finish (on black boots only)',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098ed1b52f422f2bd490/1616054670360/Rectangle+5.png?format=500w',
        desc: <div />,
      },
      {
        name: 'Wax / sealer',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053e9bb66049027a975d6ef/1616112060087/Rectangle+7+%281%29.png?format=1000w',
        desc: <div />,
      },
      {
        name: 'Chem glaze',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098f85ad213cde310507/1616054671431/Rectangle+6.png?format=500w',
        desc: <div />,
      },
      {
        name: 'Chem glaze with light to medium glitter',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098df6334f7eb9f00f93/1616054669283/Rectangle+4.png?format=500w',
        desc: <div />,
      },
      {
        name: 'Chem glaze with heavy glitter',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098f933c4c201208f104/1616054671439/Rectangle+3.png?format=500w',
        desc: <div />,
      },
      {name: 'Chem glaze with solid coat glitter', desc: <div />},
    ],
  },

  {
    section: 'Arch support and pronation correction options',
    items: [
      {
        name: 'Foot impression kit',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e1d78c072aeb3bebb5/1616054753890/Rectangle+2-4.png?format=750w',
        desc: (
          <div>
            <p>
              Foot impression kits are made by Foam Art where skaters step inside a foam
              filled box in order to replicate the exact measurements and shape of the
              foot.
            </p>

            <p>
              A cast is then poured into the foot impression to build the orthopaedic arch
              support.
            </p>

            <p>
              If you already have a impression mold of your foot, please let us know and
              we can reduce the cost of this option.
            </p>
          </div>
        ),
      },
      {
        name: 'Orthopedic arch support',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e30c017759c5feb2ba/1616054755865/Rectangle+5-2.png?format=750w',
        desc: (
          <div>
            <p>
              A custom innersole that is made exactly from the skater’s foot shape. The
              arch support helps skaters’ feet that pronate (inward rotation) by keeping
              them in a neutral position. It can also help skaters that have high arches
              by providing additional support. This is the best way to optimize for a
              custom fit.
            </p>
            <p>Orthopaedic arch supports can be removed and adjusted over time.</p>
          </div>
        ),
      },
      {
        name: 'Allowance for non-Harlick orthotic correction',
        desc: (
          <p>
            Additional depth is added to the foot bed to accommodate the thickness of a
            doctor’s arch support. The exact allowance may vary.
          </p>
        ),
      },
      {
        name: 'Superfeet or power step orthotics (includes allowance)',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e30d9ceb298c7958a4/1616054755901/Rectangle+3-4.png?format=750w',
        desc: (
          <div>
            <p>
              A standardized, off the shelf arch support option. It helps skaters’ feet
              that pronate (inward rotation) by keeping them in a neutral position. It can
              also help skaters that have high arches by providing additional support.
            </p>
            <p>
              This option is not tailored precisely to a skater’s foot shape. In some
              instances, where skaters have extremely flat or highly arched feet, this
              option may not be recommended.
            </p>
          </div>
        ),
      },
      {
        name: 'Inside or outside wedge correction',
        desc: (
          <div>
            <p>
              An inside wedge correction is a thin wedge (⅛ to ¼ inch) that helps correct
              pronation (inward rotation) of the foot.
            </p>
            <p>
              An outside wedge correction is a thin wedge (⅛ to ¼ inch) that helps correct
              supination (outward rotation) of the foot.
            </p>
          </div>
        ),
      },
    ],
  },

  {
    section: 'Backstays',
    items: [
      {
        name: 'No backstay',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053b1eec02ba770d353fa7d/1616097774700/Rectangle+7.png?format=500w',
        desc: <div />,
      },
      {
        name: 'Low cut backstay',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053b26f12ac4465104f74f9/1616097903401/Rectangle+8.png?format=500w',
        desc: <p>¼ to ½ inch deep cutout to increase toe pointing and range of motion</p>,
      },
      {
        name: 'Low cut backstay with insert (lower than height of dance backstay)',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e3d1b52f422f2bd767/1616054755850/Rectangle+2-1.png?format=500w',
        desc: (
          <p>
            ¼ to ½ inch deep cutout to increase toe pointing and range of motion with an
            additional padded poron insert
          </p>
        ),
      },
      {
        name: 'Dance backstay',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605ecce70fbea64d81ab3843/1616825575632/Rectangle+10+%282%29.png?format=750w',
        desc: (
          <p>
            ½ to ¾ inch deep cutout to increase toe pointing and range of motion. Ideal
            for dance skaters
          </p>
        ),
      },
      {
        name: '"BB" backstay (extra padded top collar)',
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053e9b8d50e0a711a468fe6/1616112056730/Rectangle+9+%281%29.png?format=1000w',
        desc: (
          <p>
            Low cut sides and back with ¼ inch polyurethane padding that extends above the
            top edge of the outer leather. It eliminates any discomfort at the top edge of
            a boot and increases overall range of motion.
          </p>
        ),
      },
    ],
  },

  {
    section: 'Special design',
    items: [
      {
        name: 'Artistic design (inquire about design options) (Starting from $75.00)',
        hideNoCharge: true,
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053e9bb46333f16efd03249/1616112059242/Rectangle+3.png?format=1000w',
        desc: (
          <div>
            <p>
              Standard shapes (star, hearts) and initials can be hand cut into the outer
              leather of the upper. The standard size ranges from 1 ½ to 3 inches.
              Artistic designs can be created in calf, suede or elk leather.
            </p>
            <p>
              Embroidered patches can also be incorporated into the artistic design for
              more precise detail.
            </p>
            <p>
              Additional customizations available upon request. Price may vary depending
              on the final design.
            </p>
          </div>
        ),
      },
      {
        name: 'Artistic crystals (inquire about design options) (Starting from $50.00)',
        hideNoCharge: true,
        image:
          'https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605ec7869c3c7737d9b395f3/1616824198874/Rectangle+4+%281%29.png?format=750w',
        desc: (
          <div>
            <p>Crystals can be added to the upper near the lace holes.</p>
            <p>
              Standard crystal color options: silver, white, gold, black, orange, green,
              blue, purple, red Additional crystal options available upon request
            </p>
          </div>
        ),
      },
    ],
  },

  // Stock boots only
  {
    section: 'Stock boot type',
    items: [
      {
        name: 'Finalist',
        desc: (
          <p>
            Double duo bond ankle reinforcement (extra strong). Three layer construction.
          </p>
        ),
      },
      {
        name: 'High tester',
        desc: <p>Duo bond ankle reinforcement (strong). Three layer construction.</p>,
      },
      {
        name: 'Competitor Plus Plus',
        desc: (
          <p>
            Double duo bond ankle reinforcement (extra strong). Two layer construction.
          </p>
        ),
      },
      {
        name: 'Competitor Plus',
        desc: <p>Duo bond ankle reinforcement (strong). Two layer construction.</p>,
      },
      {
        name: 'Competitor',
        desc: <p>Light ankle reinforcement (medium). Two layer construction.</p>,
      },
      {name: 'Standard', desc: <p>No ankle reinforcement. Two layer construction</p>},
    ],
  },

  {
    section: 'Combination width options (up to two widths)',
    items: [
      {name: 'Combination width ball and heel'},
      {name: 'Left and right split sizing (up to 1/4 size difference)'},
      {name: 'X-Line design'},
    ],
  },
];

export function applyFormDescriptions(formEl: Element) {
  // TOOD

  const formItems = Array.from(formEl.querySelectorAll('.form-item'));

  formItems.forEach(section => {
    const titleEl = section.querySelector<HTMLLabelElement | HTMLFieldSetElement>(
      '.title'
    );

    if (titleEl === null) {
      return;
    }

    const sectionTitle = titleEl.innerText.replace(' *', '').trim();
    const data = descriptions.find(desc => desc.section === sectionTitle);

    if (data === undefined) {
      return;
    }

    // Add section description
    const descRoot = document.createElement('div');
    descRoot.classList.add('desc');
    titleEl.insertAdjacentElement('afterend', descRoot);

    if (data.description) {
      render(data.description, descRoot);
    }

    // Translate items
    const options = Array.from(section.querySelectorAll<HTMLDivElement>('.option'));

    options.forEach(option => {
      const label = option.querySelector<HTMLLabelElement>('label');
      const name = option.innerText.replace(PRICE_REGEX, '').trim();
      const costMatch = option.innerText.match(PRICE_REGEX);

      if (label === null) {
        return;
      }

      // Remove the text / input, we're going to replace this with our own.
      label.childNodes[1]?.remove();
      option.querySelector('input')!.style.display = 'none';

      // Get the item if we can
      const item = data.items?.find(i => i.name === name);

      const info = (
        <div>
          <h5>
            {name}
            {!item?.hideNoCharge && (
              <div className={`price ${costMatch === null && 'no-cost'}`}>
                {costMatch !== null ? (
                  <Fragment>+${costMatch[1]}</Fragment>
                ) : (
                  <Fragment>No charge</Fragment>
                )}
              </div>
            )}
          </h5>
          {item?.desc}
        </div>
      );

      const newLabel = item?.image ? (
        <div className="with-thumb">
          <img src={item.image} />
          {info}
        </div>
      ) : (
        info
      );

      // Insert new label
      const entryRoot = document.createElement('div');
      entryRoot.classList.add('desc');
      label.insertAdjacentElement('beforeend', entryRoot);

      render(newLabel, entryRoot);
    });
  });
}
