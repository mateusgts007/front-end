function mudarCor() {
    const cores = ['#f4f4f4', '#ffcccc', '#ccffcc', '#ccccff', '#ffeb3b', '#ff5722'];
    const novaCor = cores[Math.floor(Math.random() * cores.length)];
    document.body.style.backgroundColor = novaCor;
}
