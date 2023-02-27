export const DETAIL_UPDATE = 'DETAIL_UPDATE';
export const DETAIL_RENDERING = 'DETAIL_RENDERING';
export const REBOOT_TABLE = 'REBOOT_TABLE';

export const updatedDetail = (detail) => ({
  type: DETAIL_UPDATE, payload: detail,
});
export const detailRendering = (detail) => ({
  type: DETAIL_RENDERING, payload: detail,
});
