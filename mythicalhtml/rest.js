document.addEventListener('DOMContentLoaded', () => {
    const flags = document.querySelectorAll('.flags .flag');
    const factions = document.querySelectorAll('.factions .faction');

    flags.forEach(flag => {
        flag.addEventListener('click', () => {
            flags.forEach(f => f.classList.remove('selected'));
            flag.classList.add('selected');
        });
    });

    factions.forEach(faction => {
        faction.addEventListener('click', () => {
            factions.forEach(f => f.classList.remove('selected'));
            faction.classList.add('selected');
        });
    });
});
