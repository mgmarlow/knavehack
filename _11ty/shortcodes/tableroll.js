const tableroll = (name) => {
  return `<div style="margin-bottom: 1rem; display: flex" x-data="table('${name}')">
  <div style="align-content: center; margin-right: 1rem">
    <button class="button" @click="roll">⟳</button>
  </div>
  <div style="align-content: center" x-text="selected"></div>
</div>`;
};

module.exports = tableroll;
