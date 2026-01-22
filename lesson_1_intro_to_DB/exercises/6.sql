.mode box

SELECT Album.Title, length(Album.Title)
FROM Album
GROUP by Album.AlbumId
ORDER BY length(Album.Title) DESC
LIMIT 3;
