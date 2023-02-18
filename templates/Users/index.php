<h1>Users</h1>
<table>
    <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Created</th>
    </tr>

    <!-- Here is where we iterate through our $users query object, printing out user info -->

    <?php foreach ($users as $user): ?>
    <tr>
        <td>
            <?= $this->Html->link($user->name, ['action' => 'view', $user->slug]) ?>
        </td>
        <td>
            <?= $user->email ?>
        </td>        
        <td>
            <?= $user->created->format(DATE_RFC850) ?>
        </td>
    </tr>
    <?php endforeach; ?>
</table>