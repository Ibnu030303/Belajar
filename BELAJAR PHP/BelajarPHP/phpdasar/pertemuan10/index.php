<?php

require_once 'functions.php';

$mahasiswa = query("SELECT * FROM mahasiswa");

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Halaman Admin</title>
</head>

<body>
    <h1>Daftar Mahasiswa</h1>

    <a href="tambah_data.php">Tamban Data Mahasiswa</a>
    <br>
    <br>
    <table border="1" cellpadding="10" cellspacing="0">
        <tr>
            <th>No</th>
            <th>Aksi</th>
            <th>Gambar</th>
            <th>NIM</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Jurusan</th>
        </tr>

        <?php $no = 1; ?>
        <?php foreach( $mahasiswa as $row ) : ?>
            <tr>
                <td><?= $no; ?></td>
                <td>
                    <a href="">Ubah</a> |
                    <a href="hapus.php?id=<?= $row["id"];?>" onclick="return confirm('yakin ingin mengapus <?= $row['nama']?>')">Hapus</a>
                </td>
                <td>
                    <img src="img/<?= $row["gambar"]; ?> " alt="" width="50px" height="50px">
                </td>
                <td><?= $row["nim"]; ?></td>
                <td><?= $row["nama"]; ?></td>
                <td><?= $row["email"]; ?></td>
                <td><?= $row["jurusan"]; ?></td>
            </tr>
        <?php $no++; ?>
        <?php endforeach; ?>
    </table>
</body>

</html>