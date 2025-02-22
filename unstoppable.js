// unstoppable.js
document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');

    // Sample video data (replace with your actual data from YouTube API or a data source)
    const videos = [
        { title: 'Unstoppable Intro 2025 $k', thumbnail: 'Screen Shot 2025-02-22 at 8.30.30 AM.png', videoId: 'kM-YDbboHqE' },  // Replace with actual data
        { title: 'Unstoppable Official Trailer', thumbnail: 'Screen Shot 2025-02-22 at 8.31.32 AM.png', videoId: '-MfSBwzapaU' },
        { title: 'My First Video', thumbnail: 'Screen Shot 2025-02-22 at 8.32.18 AM.png', videoId: '3D7yu_mvtSE' },
        // ... more videos
    ];

    videos.forEach(video => {
        const videoDiv = document.createElement('div');
        videoDiv.classList.add('video-thumbnail');
        videoDiv.innerHTML = `<img src="${video.thumbnail}" alt="${video.title}">`;

        videoDiv.addEventListener('click', () => {
            // Redirect to the YouTube video when the thumbnail is clicked
            window.open(`https://www.youtube.com/watch?v=${video.videoId}`, '_blank'); // Opens in a new tab
        });

        videoGrid.appendChild(videoDiv);
    });
});