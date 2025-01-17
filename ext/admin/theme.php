<?php

declare(strict_types=1);

class AdminPageTheme extends Themelet
{
    /*
     * Show the basics of a page, for other extensions to add to
     */
    public function display_page()
    {
        global $page;

        $page->set_title("Admin Tools");
        $page->set_heading("Admin Tools");
        $page->add_block(new NavBlock());
    }
}
