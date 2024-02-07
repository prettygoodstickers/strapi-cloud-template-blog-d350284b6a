import type { Schema, Attribute } from '@strapi/strapi';

export interface CtaSectionCard extends Schema.Component {
  collectionName: 'components_cta_section_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    image: Attribute.Media;
  };
}

export interface MenuItem extends Schema.Component {
  collectionName: 'components_menu_items';
  info: {
    displayName: 'item';
    description: '';
  };
  attributes: {
    title: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface MenuMenu extends Schema.Component {
  collectionName: 'components_menu_menus';
  info: {
    displayName: 'menu';
  };
  attributes: {
    name: Attribute.String;
    menu: Attribute.Component<'menu.item', true>;
  };
}

export interface QuickstartrowCard extends Schema.Component {
  collectionName: 'components_quickstartrow_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    title: Attribute.String;
    slug: Attribute.String &
      Attribute.CustomField<
        'plugin::slug.slug',
        {
          pattern: 'title';
        }
      >;
    image: Attribute.Media;
  };
}

export interface SharedArticleHeaderType1 extends Schema.Component {
  collectionName: 'components_shared_article_header_type_1s';
  info: {
    displayName: 'Article Header nr.1 ';
    description: '';
  };
  attributes: {
    backgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    altBackgroundColor: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    image: Attribute.Media;
    imageWidthPercent: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      >;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
    description: '';
  };
  attributes: {
    file: Attribute.Media & Attribute.Required;
    widthPercent: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<100>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'align-justify';
    description: '';
  };
  attributes: {
    content: Attribute.Blocks;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    name: 'Seo';
    icon: 'allergies';
    displayName: 'Seo';
    description: '';
  };
  attributes: {
    metaTitle: Attribute.String & Attribute.Required;
    metaDescription: Attribute.Text & Attribute.Required;
    shareImage: Attribute.Media;
  };
}

export interface SharedSlider extends Schema.Component {
  collectionName: 'components_shared_sliders';
  info: {
    displayName: 'Slider';
    icon: 'address-book';
    description: '';
  };
  attributes: {
    files: Attribute.Media;
  };
}

export interface SharedSpacer extends Schema.Component {
  collectionName: 'components_shared_spacers';
  info: {
    displayName: 'Spacer';
  };
  attributes: {
    space: Attribute.Integer &
      Attribute.SetMinMax<
        {
          min: 0;
          max: 100;
        },
        number
      > &
      Attribute.DefaultTo<0>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'cta-section.card': CtaSectionCard;
      'menu.item': MenuItem;
      'menu.menu': MenuMenu;
      'quickstartrow.card': QuickstartrowCard;
      'shared.article-header-type-1': SharedArticleHeaderType1;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
      'shared.spacer': SharedSpacer;
    }
  }
}
