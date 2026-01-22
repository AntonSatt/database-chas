.mode box

SELECT Album.Title, SUM(Track.Milliseconds)
FROM Album
JOIN Track ON Album.AlbumId = Track.AlbumId
GROUP BY Album.AlbumId
ORDER BY SUM(Track.Milliseconds) ASC
LIMIT 3;

