import { expect } from 'chai';
import { mount } from '@vue/test-utils';
import ZipCode from '@/components/ZipCode.vue';
import App from '@/App.vue';

describe('ZipCode.vue', () => {
  it('郵便番号を表示するだけ', () => {
    const wrapper = mount(ZipCode, {
      propsData: {
        zip: '012-3456',
      },
    });
    expect(wrapper.props().zip);
  });
});


describe('App.vue', () => {
  it('入力された値が郵便番号かチェック', () => {
    const wrapper = mount(App);
    wrapper.setData({ zip: '012-3456' });
    expect(wrapper.vm.zip).match(/^[0-9]{3}-[0-9]{4}$/);
  });
});
