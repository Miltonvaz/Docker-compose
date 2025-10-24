(async function () {
  const elName = document.getElementById('name');
  const btn = document.getElementById('reload');

  async function getConfig() {
    try {
      const res = await fetch('/config.json', { cache: 'no-store' });
      if (!res.ok) throw new Error('No config');
      return await res.json();
    } catch {
      // fallback automático según entorno
      const isDocker = window.location.hostname === 'frontend_milton';
      return {
        apiUrl: isDocker
          ? 'http://backend_milton:5000/api/items/1'
          : 'http://3.88.197.51:5000/api/items/1'
      };
    }
  }

  async function fetchName(apiUrl) {
    try {
      const res = await fetch(apiUrl);      if (!res.ok) throw new Error('API error');
      const data = await res.json();
      return data?.name || 'Nombre no disponible';
    } catch (err) {
      console.error(err);
      return 'Error al obtener nombre';
    }
  }

  async function load() {
    elName.textContent = 'Cargando...';
    const cfg = await getConfig();
    const name = await fetchName(cfg.apiUrl);
    elName.textContent = name;
  }

  btn.addEventListener('click', load);
  load();
})();