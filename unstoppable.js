// unstoppable.js
document.addEventListener('DOMContentLoaded', () => {
    const videoGrid = document.getElementById('video-grid');

    // Sample video data (replace with your actual data from YouTube API or a data source)
    const videos = [
        { title: 'Video 1 Title', thumbnail: 'video1.jpg', videoId: 'VIDEO_ID_1' },  // Replace with actual data
        { title: 'Video 2 Title', thumbnail: 'video2.jpg', videoId: 'VIDEO_ID_2' },
        { title: 'Video 3 Title', thumbnail: 'video3.jpg', videoId: 'VIDEO_ID_3' },
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