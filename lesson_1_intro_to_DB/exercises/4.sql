.mode box

SELECT Album.Title, COUNT(Track.TrackId)
FROM Album
JOIN Track ON Album.AlbumId = Track.AlbumId
GROUP by Album.AlbumId
ORDER BY COUNT(Track.TrackId) DESC
LIMIT 3;
